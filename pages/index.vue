<template>
  <div>
    <!-- Hero -->
    <section data-reveal class="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 md:flex-row md:items-center lg:px-6 lg:pb-24 lg:pt-12">
      <div class="flex-1 space-y-6">
        <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-200">
          Photography • Portraits • Events
        </p>
        <h1 class="text-balance text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl lg:text-6xl">
          Timeless portraits,
          <span class="block text-slate-700 dark:text-slate-300">honest stories.</span>
        </h1>
        <p class="max-w-xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
          Hi, I&apos;m
          <span class="font-medium text-slate-900 dark:text-slate-100">Joshua Martinez Austria</span> — a photographer in
          the Philippines focused on real moments, genuine emotions, and story-driven images.
        </p>
        <div class="flex flex-wrap items-center gap-4">
          <NuxtLink
            to="/contact"
            class="rounded-full border border-slate-300 bg-slate-100 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-900 shadow-sm transition hover:bg-slate-200 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Book a session
          </NuxtLink>
          <NuxtLink
            to="/gallery"
            class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
          >
            <span>View gallery</span>
            <Icon icon="solar:arrow-right-outline" class="text-base" />
          </NuxtLink>
        </div>
        <dl class="mt-4 grid grid-cols-3 gap-4 text-xs text-slate-600 dark:text-slate-300 sm:max-w-md">
          <div>
            <dt class="font-semibold text-slate-900 dark:text-slate-100">
              Weddings & Events
            </dt>
            <dd>Prenups, weddings, birthdays, reunions, and special life moments.</dd>
          </div>
          <div>
            <dt class="font-semibold text-slate-900 dark:text-slate-100">
              Portrait Sessions
            </dt>
            <dd>Families, couples, and personal branding.</dd>
          </div>
          <div>
            <dt class="font-semibold text-slate-900 dark:text-slate-100">
              On‑location
            </dt>
            <dd>General Santos City, Philippines.</dd>
          </div>
        </dl>
      </div>

      <!-- Hero image grid (placeholder) -->
      <div class="flex-1">
        <div class="grid grid-cols-2 gap-3 sm:gap-4">
          <div class="space-y-3 sm:space-y-4">
            <div
              data-reveal
              data-reveal-delay="60"
              role="button"
              tabindex="0"
              :aria-label="`Open ${itemLabels.portrait}`"
              class="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-slate-300 bg-slate-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:border-slate-500 dark:border-white/20 dark:bg-slate-900/40 dark:hover:border-white/35 cursor-zoom-in"
              @click="openImage('/images/index/portrait.jpg')"
              @keydown.enter.prevent="openImage('/images/index/portrait.jpg')"
              @keydown.space.prevent="openImage('/images/index/portrait.jpg')"
            >
              <img
                src="/images/index/portrait.jpg"
                alt="Portraits"
                loading="lazy"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-black/15" />
              <div class="relative flex h-full items-end justify-between p-4 text-xs text-white dark:text-slate-100">
                <span>Portrait</span>
                <span class="text-[10px] uppercase tracking-[0.25em]">Gallery</span>
              </div>
            </div>
            <div
              data-reveal
              data-reveal-delay="120"
              role="button"
              tabindex="0"
              :aria-label="`Open ${itemLabels.details}`"
              class="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-300 bg-slate-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:border-slate-500 dark:border-white/20 dark:bg-slate-900/40 dark:hover:border-white/35 cursor-zoom-in"
              @click="openImage('/images/index/details.jpg')"
              @keydown.enter.prevent="openImage('/images/index/details.jpg')"
              @keydown.space.prevent="openImage('/images/index/details.jpg')"
            >
              <img
                src="/images/index/details.jpg"
                alt="Details"
                loading="lazy"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-black/15" />
              <div class="relative flex h-full items-end justify-between p-4 text-xs text-white dark:text-slate-100">
                <span>Details</span>
                <span class="text-[10px] uppercase tracking-[0.25em]">Gallery</span>
              </div>
            </div>
          </div>
          <div class="mt-6 space-y-3 sm:space-y-4">
            <div
              data-reveal
              data-reveal-delay="180"
              role="button"
              tabindex="0"
              :aria-label="`Open ${itemLabels.weddings}`"
              class="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-300 bg-slate-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:border-slate-500 dark:border-white/20 dark:bg-slate-900/40 dark:hover:border-white/35 cursor-zoom-in"
              @click="openImage('/images/index/wedding.jpg')"
              @keydown.enter.prevent="openImage('/images/index/wedding.jpg')"
              @keydown.space.prevent="openImage('/images/index/wedding.jpg')"
            >
              <img
                src="/images/index/wedding.jpg"
                alt="Weddings"
                loading="lazy"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-black/15" />
              <div class="relative flex h-full items-end justify-between p-4 text-xs text-white dark:text-slate-100">
                <span>Weddings</span>
                <span class="text-[10px] uppercase tracking-[0.25em]">Gallery</span>
              </div>
            </div>
            <div
              data-reveal
              data-reveal-delay="240"
              role="button"
              tabindex="0"
              :aria-label="`Open ${itemLabels.editorial}`"
              class="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-slate-300 bg-slate-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:border-slate-500 dark:border-white/20 dark:bg-slate-900/40 dark:hover:border-white/35 cursor-zoom-in"
              @click="openImage('/images/index/editorial.jpg')"
              @keydown.enter.prevent="openImage('/images/index/editorial.jpg')"
              @keydown.space.prevent="openImage('/images/index/editorial.jpg')"
            >
              <img
                src="/images/index/editorial.jpg"
                alt="Editorial"
                loading="lazy"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-black/15" />
              <div class="relative flex h-full items-end justify-between p-4 text-xs text-white dark:text-slate-100">
                <span>Editorial</span>
                <span class="text-[10px] uppercase tracking-[0.25em]">Gallery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services preview -->
    <section data-reveal class="mx-auto max-w-6xl px-4 pb-16 lg:px-6">
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-50 sm:text-2xl">
            Services at a glance
          </h2>
          <p class="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-300">
            A quick overview of popular packages. Edit names, pricing, and descriptions to match your real offers.
          </p>
        </div>
        <NuxtLink
          to="/services"
          class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
        >
          View all services
        </NuxtLink>
      </div>

      <div class="mt-6 grid gap-4 md:grid-cols-3">
          <article
          v-for="service in services"
          :key="service.title"
          class="flex flex-col justify-between rounded-2xl border border-slate-300 bg-white p-5 text-sm text-slate-700 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-slate-500 dark:border-white/20 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/35 dark:hover:bg-white/10"
          data-reveal
        >
          <div>
            <h3 class="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {{ service.title }}
            </h3>
            <p class="mt-2 text-xs text-slate-600 dark:text-slate-300">
              {{ service.description }}
            </p>
          </div>
          <p class="mt-4 text-xs font-semibold text-slate-700 dark:text-white">
            {{ service.note }}
          </p>
        </article>
      </div>
    </section>

    <!-- Lightbox -->
    <div
      v-if="activeImage"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      @click.self="closeImage"
    >
      <div
        class="relative max-w-5xl w-full rounded-2xl border border-white/15 bg-black/40 p-2 shadow-2xl"
      >
        <button
          class="absolute right-2 top-2 rounded-full bg-black/60 px-3 py-2 text-sm text-white hover:bg-black/80"
          type="button"
          aria-label="Close"
          @click="closeImage"
        >
          ✕
        </button>
        <img
          :src="activeImage"
          alt="Selected"
          class="max-h-[80vh] w-full rounded-xl object-contain"
          loading="eager"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import { Icon } from '@iconify/vue'

const itemLabels = {
  portrait: 'Portraits',
  details: 'Details',
  weddings: 'Weddings',
  editorial: 'Editorial'
}

const services = [
  {
    title: 'Wedding Day Story',
    description:
      'Full‑day coverage with a focus on candid, documentary‑style storytelling. Replace with your real package details.',
    note: 'Best for full weddings & big events.'
  },
  {
    title: 'Portrait Session',
    description:
      'Couples, families, graduates, or personal branding portraits. You can list session length, locations, and outfit changes.',
    note: 'Perfect for memories & milestones.'
  },
  {
    title: 'Brand & Content',
    description:
      'Visuals for small businesses, artists, and creators. Update this section with your brand work or studio offerings.',
    note: 'Ideal for creatives & entrepreneurs.'
  }
]

const activeImage = ref<string | null>(null)

function openImage(src: string) {
  activeImage.value = src
  // Prevent background scroll while modal is open.
  document.body.style.overflow = 'hidden'
}

function closeImage() {
  activeImage.value = null
  document.body.style.overflow = ''
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && activeImage.value) closeImage()
}

if (typeof window !== 'undefined') {
  window.addEventListener('keydown', onKeydown)
}

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', onKeydown)
  }
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

