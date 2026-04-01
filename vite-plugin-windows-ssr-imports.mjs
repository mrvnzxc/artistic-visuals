/**
 * Vite SSR on Windows can emit `import x from "C:/path/to/file.mjs"`.
 * Node's ESM loader rejects bare `C:/...` (ERR_UNSUPPORTED_ESM_URL_SCHEME).
 * Only rewrite the main SSR entry `server.mjs` — other files under dist/server
 * (e.g. client.manifest.mjs) must not be touched.
 */
import { pathToFileURL } from 'node:url'

/** @returns {import('vite').Plugin} */
export function windowsSsrAbsoluteImportsFix() {
  return {
    name: 'windows-ssr-absolute-imports-fix',
    apply: 'build',
    enforce: 'post',
    renderChunk(code, chunk) {
      if (process.platform !== 'win32') {
        return null
      }

      const base = chunk.fileName.split(/[/\\]/).pop() || ''
      if (base !== 'server.mjs') {
        return null
      }

      if (!/[A-Z]:[/\\]/.test(code)) {
        return null
      }

      let out = code

      const toFileUrl = (abs) => {
        const normalized = abs.replace(/\//g, '\\')
        return pathToFileURL(normalized).href
      }

      out = out.replace(/\bfrom\s+"([A-Z]:\/[^"]+)"/g, (_, abs) => `from "${toFileUrl(abs)}"`)
      out = out.replace(/\bfrom\s+'([A-Z]:\/[^']+)'/g, (_, abs) => `from '${toFileUrl(abs)}'`)
      out = out.replace(/\bimport\s*\(\s*"([A-Z]:\/[^"]+)"\s*\)/g, (_, abs) => `import("${toFileUrl(abs)}")`)
      out = out.replace(/\bimport\s*\(\s*'([A-Z]:\/[^']+)'\s*\)/g, (_, abs) => `import('${toFileUrl(abs)}')`)

      if (out === code) return null
      return { code: out, map: null }
    }
  }
}
