<template>
  <footer class="relative z-10 border-t border-slate-200 bg-slate-100/90 text-slate-600 dark:border-white/10 dark:bg-slate-950/90 dark:text-slate-400">
    <div class="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm md:flex-row md:items-center md:justify-between lg:px-6">
      <div>
        <p class="font-medium text-slate-900 dark:text-slate-100">
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
          class="inline-flex items-center rounded-full border border-slate-300/70 bg-white p-2 text-slate-900 hover:border-slate-400 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:border-white/30 dark:hover:bg-white/5"
          aria-label="Facebook"
        >
          <Icon icon="mdi:facebook" class="text-lg" />
        </a>
        <a
          href="https://www.instagram.com/joshuaaustriaxx/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white px-3 py-1.5 text-xs font-medium text-slate-900 hover:border-slate-400 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:border-white/30 dark:hover:bg-white/5"
        >
          <Icon icon="mdi:instagram" class="text-lg" />
        </a>
        <p class="text-xs font-medium text-slate-700 dark:text-slate-200">
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

