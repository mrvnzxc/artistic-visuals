<template>
  <header
    class="fixed inset-x-0 top-0 z-30 border-b border-slate-200/80 bg-white/95 shadow-sm shadow-black/[0.04] dark:border-white/[0.04] dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 dark:shadow-none"
  >
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
      <div class="flex items-center gap-3">
        <NuxtLink to="/" class="flex items-center gap-3">
          <img
            src="/images/logo/avlight.jpg"
            alt="Artistic Visuals"
            class="h-11 w-auto dark:hidden sm:h-12"
            loading="eager"
          />
          <img
            src="/images/logo/avdark.jpg"
            alt="Artistic Visuals"
            class="hidden h-11 w-auto dark:block sm:h-12"
            loading="eager"
          />
        </NuxtLink>
        <div class="leading-tight">
          <p class="text-sm font-semibold tracking-wide">
            Artistic Visuals
          </p>
          <p class="text-xs text-slate-500 dark:text-zinc-400">
            Photography
          </p>
        </div>
      </div>

      <div class="flex items-center gap-3 lg:hidden">
        <button
          class="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white px-3 py-1.5 text-xs font-medium tracking-wide text-slate-900 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/70 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:border-white/40 dark:hover:bg-white/10 dark:focus-visible:ring-white/30"
          type="button"
          @click="toggleTheme"
          aria-label="Toggle dark mode"
        >
          <Icon
            icon="solar:sun-2-outline"
            class="hidden text-lg dark:block"
          />
          <Icon
            icon="solar:moon-outline"
            class="text-lg dark:hidden"
          />
        </button>

        <button
          class="inline-flex items-center gap-2 rounded-full border border-slate-300/70 px-3 py-1.5 text-xs font-medium tracking-wide text-slate-900 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/70 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:border-white/40 dark:hover:bg-white/10 dark:focus-visible:ring-white/30"
          type="button"
          @click="open = !open"
        >
          <span>Menu</span>
          <Icon icon="solar:hamburger-menu-outline" class="text-lg" />
        </button>
      </div>

      <div class="hidden items-center gap-4 text-sm font-medium text-slate-700 dark:text-slate-200 lg:flex">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="transition-colors hover:text-slate-900 dark:hover:text-zinc-100"
        >
          {{ item.label }}
        </NuxtLink>

        <button
          class="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white px-3 py-1.5 text-xs font-medium tracking-wide text-slate-900 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/70 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:border-white/40 dark:hover:bg-white/10 dark:focus-visible:ring-white/30"
          type="button"
          @click="toggleTheme"
          aria-label="Toggle dark mode"
        >
          <Icon
            icon="solar:sun-2-outline"
            class="hidden text-lg dark:block"
          />
          <Icon
            icon="solar:moon-outline"
            class="text-lg dark:hidden"
          />
        </button>

        <NuxtLink
          to="/contact"
          class="rounded-full border border-zinc-800/40 bg-gradient-to-r from-zinc-800 via-neutral-800 to-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md shadow-black/25 transition hover:brightness-110 dark:border-zinc-600/50 dark:from-zinc-700 dark:via-zinc-800 dark:to-black"
        >
          Book a Session
        </NuxtLink>
      </div>
    </nav>

    <div v-if="open" class="border-t border-slate-200 bg-white/95 dark:border-white/[0.04] dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 lg:hidden">
      <div class="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-md px-2 py-2 text-slate-900 hover:bg-zinc-100/90 dark:text-zinc-100 dark:hover:bg-zinc-900/50"
          @click="open = false"
        >
          {{ item.label }}
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="mt-1 rounded-md border border-zinc-800/40 bg-gradient-to-r from-zinc-800 via-neutral-800 to-black px-2 py-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white hover:brightness-110 dark:border-zinc-600/50 dark:from-zinc-700 dark:via-zinc-800 dark:to-black"
          @click="open = false"
        >
          Book a Session
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const open = ref(false)
const { toggleTheme } = useTheme()

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
]
</script>

