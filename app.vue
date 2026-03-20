<template>
  <div
    class="relative isolate min-h-screen overflow-x-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50"
  >
    <!-- Decorative top wave -->
    <div
      class="pointer-events-none absolute inset-x-0 top-0 z-0 block h-28 bg-[#d9f5e6] [clip-path:polygon(0_0,100%_0,100%_70%,80%_88%,58%_98%,34%_92%,14%_82%,0_68%)] sm:h-44 sm:[clip-path:polygon(0_0,100%_0,100%_72%,82%_86%,60%_96%,34%_92%,14%_84%,0_70%)] dark:hidden"
    />
    <div
      class="pointer-events-none absolute inset-x-0 top-0 z-0 hidden h-28 bg-slate-900/40 [clip-path:polygon(0_0,100%_0,100%_70%,80%_88%,58%_98%,34%_92%,14%_82%,0_68%)] sm:h-44 sm:[clip-path:polygon(0_0,100%_0,100%_72%,82%_86%,60%_96%,34%_92%,14%_84%,0_70%)] dark:block"
    />
    <!-- Decorative bottom wave -->
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-[#d9f5e6] [clip-path:polygon(0_38%,16%_18%,38%_10%,60%_18%,82%_30%,100%_42%,100%_100%,0_100%)] sm:h-36 sm:[clip-path:polygon(0_44%,16%_24%,38%_14%,60%_20%,82%_34%,100%_46%,100%_100%,0_100%)] dark:hidden"
    />
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 z-0 hidden h-32 bg-slate-900/35 [clip-path:polygon(0_38%,16%_18%,38%_10%,60%_18%,82%_30%,100%_42%,100%_100%,0_100%)] sm:h-36 sm:[clip-path:polygon(0_44%,16%_24%,38%_14%,60%_20%,82%_34%,100%_46%,100%_100%,0_100%)] dark:block"
    />
    <SiteNav />
    <main class="relative z-10 pt-20">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteNav from '~/components/SiteNav.vue'
import SiteFooter from '~/components/SiteFooter.vue'

const { theme } = useTheme()

useHead(() => ({
  link: [
    {
      rel: 'icon',
      type: 'image/jpeg',
      href: theme.value === 'dark' ? '/images/logo/avdark.jpg' : '/images/logo/avlight.jpg'
    }
  ]
}))
</script>

<style>
[data-reveal] {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 520ms ease, transform 520ms ease;
  will-change: opacity, transform;
}

[data-reveal].is-revealed {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  [data-reveal] {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>

