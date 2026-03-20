<template>
  <div class="mx-auto max-w-5xl px-4 pb-20 pt-10 text-slate-900 dark:text-slate-50 lg:px-6 lg:pt-12">
    <header data-reveal class="max-w-2xl">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-200">
        Services
      </p>
      <h1 class="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Photography packages you can customize later.
      </h1>
      <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">
        These are placeholder packages for weddings, portraits, and branding. Change titles, pricing,
        and details to match what Artistic Visuals actually offers.
      </p>
    </header>

    <section class="mt-10 space-y-6">
      <article
        v-for="service in services"
        :key="service.title"
        data-reveal
        class="rounded-2xl border border-slate-300 bg-white p-5 text-slate-800 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-slate-500 dark:border-white/20 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/35 dark:hover:bg-white/10 sm:p-6"
      >
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 class="text-lg font-semibold">
              {{ service.title }}
            </h2>
            <p class="mt-1 text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              {{ service.tagline }}
            </p>
          </div>
          <div class="text-right text-sm">
            <p class="text-slate-900 dark:text-white">
              {{ service.priceHint }}
            </p>
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Swap this with your real pricing.
            </p>
          </div>
        </div>

        <p class="mt-4 text-sm text-slate-700 dark:text-slate-200">
          {{ service.description }}
        </p>

        <ul
          v-if="service.included?.length"
          class="mt-4 grid gap-2 text-xs text-slate-700 dark:text-slate-200 sm:grid-cols-2"
        >
          <li v-for="item in service.included" :key="item" class="flex items-start gap-2">
            <span class="mt-[3px] h-1.5 w-1.5 rounded-full bg-slate-500 dark:bg-white/90" />
            <span>{{ item }}</span>
          </li>
        </ul>

        <div class="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
          <p class="text-slate-500 dark:text-slate-400">
            {{ service.note }}
          </p>
          <NuxtLink
            to="/contact"
            class="rounded-full border border-slate-300 px-4 py-2 font-semibold uppercase tracking-[0.25em] text-slate-900 hover:border-slate-400 hover:bg-slate-50 dark:border-white/20 dark:text-slate-100 dark:hover:border-white/30 dark:hover:bg-white/5"
          >
            Ask about this package
          </NuxtLink>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'The Wedding Story',
    tagline: 'Full‑day coverage • Documentary style',
    priceHint: 'Example: from $1,800',
    description:
      'Designed for full wedding days, from getting ready through the dance floor. Replace this text with how you actually work and what moments you focus on most.',
    included: [
      'Example: 8–10 hours coverage',
      'Example: 2 photographers',
      'Example: Online gallery & highlight slideshow',
      'Example: Timeline planning support'
    ],
    note: 'Edit hours, number of shooters, and delivery details to match your real offer.'
  },
  {
    title: 'Portrait & Lifestyle',
    tagline: 'Couples • Families • Individuals',
    priceHint: 'Example: from $250',
    description:
      'For portraits that feel natural, relaxed, and true to you. Use this section to describe your approach to posing, locations, and how you help people feel comfortable.',
    included: [
      'Example: 60–90 minute session',
      'Example: 1–2 locations within your area',
      'Example: Online gallery with curated favorites',
      'Example: Outfit guidance & prep tips'
    ],
    note: 'You can add different portrait tiers here (mini sessions, extended sessions, etc.).'
  },
  {
    title: 'Brand & Content',
    tagline: 'Small businesses • Artists • Creators',
    priceHint: 'Example: custom quote',
    description:
      'Tell future clients how you help them show up online with consistent, on‑brand imagery. Mention studio options, product photos, or on‑location storytelling.',
    included: [
      'Example: Strategy call to plan your shoot',
      'Example: Mix of portraits, behind‑the‑scenes, and details',
      'Example: Commercial usage license options',
      'Example: Delivery optimized for web & social'
    ],
    note: 'If you specialize in a certain niche (salons, restaurants, artists), highlight that here.'
  }
]
</script>

