<template>
  <footer class="relative z-10 border-t border-emerald-200/50 bg-gradient-to-b from-brand-mint-soft/50 to-slate-100/95 text-slate-600 dark:border-emerald-950/50 dark:from-brand-forest-deep/80 dark:to-slate-950/95 dark:text-slate-400">
    <div class="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-sm md:flex-row md:items-center md:justify-between lg:px-6">
      <div>
        <p class="font-medium text-emerald-950 dark:text-emerald-100">
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
          class="inline-flex items-center rounded-full border border-emerald-200/80 bg-white p-2 text-emerald-900 hover:border-emerald-400 hover:bg-emerald-50/80 dark:border-emerald-800/50 dark:bg-slate-900/60 dark:text-emerald-100 dark:hover:border-emerald-500/50 dark:hover:bg-emerald-950/50"
          aria-label="Facebook"
        >
          <Icon icon="mdi:facebook" class="text-lg" />
        </a>
        <a
          href="https://www.instagram.com/joshuaaustriaxx/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white px-3 py-1.5 text-xs font-medium text-emerald-900 hover:border-emerald-400 hover:bg-emerald-50/80 dark:border-emerald-800/50 dark:bg-slate-900/60 dark:text-emerald-100 dark:hover:border-emerald-500/50 dark:hover:bg-emerald-950/50"
        >
          <Icon icon="mdi:instagram" class="text-lg" />
        </a>
        <p class="text-xs font-medium text-emerald-900 dark:text-emerald-200">
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

