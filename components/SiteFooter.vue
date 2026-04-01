<template>
  <footer class="relative z-10 border-t border-zinc-300/80 bg-gradient-to-b from-zinc-100/90 to-zinc-50/95 text-slate-600 dark:border-zinc-800/80 dark:from-zinc-950 dark:to-black dark:text-zinc-500">
    <div class="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm md:flex-row md:items-center md:justify-between lg:px-6">
      <div>
        <p class="font-medium text-slate-900 dark:text-zinc-100">
          Artistic Visuals Photography
        </p>
        <p class="text-xs">
          Capturing stories in light and shadow.
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-4">
        <a
          href="https://www.facebook.com/profile.php?id=100063950598309"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center rounded-full border border-zinc-300/90 bg-white p-2 text-slate-800 hover:border-zinc-400 hover:bg-zinc-100/80 dark:border-zinc-700/60 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-800/80"
          aria-label="Facebook"
        >
          <Icon icon="mdi:facebook" class="text-lg" />
        </a>
        <a
          href="https://www.instagram.com/joshuaaustriaxx/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-full border border-zinc-300/90 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:border-zinc-400 hover:bg-zinc-100/80 dark:border-zinc-700/60 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-800/80"
        >
          <Icon icon="mdi:instagram" class="text-lg" />
        </a>
        <p class="text-xs font-medium text-slate-700 dark:text-zinc-300">
          0951 361 4825
        </p>
        <p class="text-xs">
          © {{ new Date().getFullYear() }} Artistic Visuals. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
