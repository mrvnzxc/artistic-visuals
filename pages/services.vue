<template>
  <div class="mx-auto max-w-5xl px-4 pb-20 pt-10 text-slate-900 dark:text-slate-50 lg:px-6 lg:pt-12">
    <header data-reveal class="max-w-2xl">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-zinc-400">
        Services
      </p>
      <h1 class="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Photography for weddings, milestones, and events.
      </h1>
    </header>

    <section class="mt-10 space-y-6">
      <article
        v-for="service in services"
        :key="service.title"
        data-reveal
        class="rounded-2xl border border-slate-300/90 bg-white/95 p-5 text-slate-800 shadow-sm shadow-black/5 ring-1 ring-zinc-900/[0.06] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-zinc-400/80 hover:shadow-md hover:shadow-black/10 dark:border-zinc-700/50 dark:bg-zinc-950/40 dark:text-zinc-200 dark:ring-zinc-500/10 dark:hover:border-zinc-500/40 dark:hover:bg-zinc-900/50 sm:p-6"
      >
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 class="text-lg font-semibold">
              {{ service.title }}
            </h2>
            <p class="mt-1 text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-zinc-500">
              {{ service.tagline }}
            </p>
          </div>
          <div class="text-right text-sm">
            <p class="text-slate-900 dark:text-zinc-50">
              {{ service.priceHint }}
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
            <span class="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
            <span>{{ item }}</span>
          </li>
        </ul>

        <div class="mt-4 flex flex-wrap justify-end">
          <NuxtLink
            to="/contact"
            class="rounded-full border border-zinc-400/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-800 hover:border-zinc-500 hover:bg-zinc-100/90 dark:border-zinc-600/50 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-900/60"
          >
            Inquire about this
          </NuxtLink>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Wedding & pre-wedding',
    tagline: 'Ceremony to reception • Engagement sessions',
    priceHint: 'Rates on request',
    description:
      'Coverage for your wedding day and pre-wedding or engagement photography—story-led images from preparation through celebrations, with attention to candid moments and the details that matter to you.',
    included: [
      'Wedding day photography',
      'Pre-wedding / engagement shoots',
      'Coordination-friendly timeline awareness',
      'Edited images delivered in an online gallery'
    ]
  },
  {
    title: 'Milestones & portraits',
    tagline: 'Debuts • Birthdays • Graduation • Portraits',
    priceHint: 'Rates on request',
    description:
      'Sessions for personal milestones and celebrations—debut and pre-debut, birthday shoots, graduation portraits, and relaxed portrait sessions for individuals, couples, or small groups.',
    included: [
      'Debut and pre-debut photography',
      'Birthday and graduation portrait sessions',
      'Couples, family, and solo portraits',
      'Location and styling guidance as needed'
    ]
  },
  {
    title: 'Events',
    tagline: 'Ceremonies • Gatherings • Programs',
    priceHint: 'Rates on request',
    description:
      'Photography for events and programs where timing and coverage matter—school or organization events, graduation ceremonies, parties, and other gatherings you want documented clearly and thoughtfully.',
    included: [
      'Event and ceremony coverage',
      'Candids, key moments, and group photos as discussed',
      'Flexible coverage windows based on your run-of-show',
      'Delivery via online gallery'
    ]
  }
]
</script>

