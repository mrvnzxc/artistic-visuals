/**
 * Shim so Node can resolve `#internal/nuxt/paths` from package.json "imports".
 * Direct "./node_modules/..." targets are invalid in "imports"; this file lives outside node_modules.
 */
export {
  baseURL,
  buildAssetsDir,
  buildAssetsURL,
  publicAssetsURL
} from '../node_modules/@nuxt/nitro-server/dist/runtime/utils/paths.mjs'
