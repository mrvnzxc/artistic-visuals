<template>
  <div class="mx-auto max-w-6xl px-4 pb-20 pt-10 text-slate-900 dark:text-slate-50 lg:px-6 lg:pt-12">
    <header data-reveal class="max-w-2xl">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-zinc-400">
        Gallery
      </p>
      <h1 class="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        A grid for your favorite photos.
      </h1>
    </header>

    <section class="mt-10">
      <div class="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        <div
          v-for="(item, index) in galleryItems"
          :key="index"
          data-reveal
          role="button"
          tabindex="0"
          :aria-label="`Open ${item.category}`"
          :class="[
            'group relative cursor-zoom-in overflow-hidden rounded-2xl border border-slate-300/90 bg-slate-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-zinc-400/70 hover:shadow-md hover:shadow-black/10 dark:border-zinc-700/50 dark:bg-slate-900/40 dark:hover:border-zinc-500/50 dark:hover:shadow-black/30',
            item.orientation === 'landscape' ? 'col-span-2 aspect-[4/3]' : 'aspect-[3/4]'
          ]"
          @click="openImage(index)"
          @keydown.enter.prevent="openImage(index)"
          @keydown.space.prevent="openImage(index)"
        >
          <img
            v-if="item.src"
            :src="item.src"
            :alt="item.category"
            loading="lazy"
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div
            v-else
            class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(161,161,170,0.35),_transparent_55%)] opacity-75 group-hover:opacity-100 dark:bg-[radial-gradient(circle_at_top,_rgba(113,113,122,0.25),_transparent_55%)]"
          />

          <div class="absolute inset-0 bg-black/15" />

          <div class="relative flex h-full items-end justify-between gap-3 p-4 text-xs text-white dark:text-slate-100">
            <span>{{ item.category }}</span>
            <span v-if="item.note" class="max-w-[55%] text-right text-[10px] leading-snug text-white/90">{{ item.note }}</span>
          </div>
        </div>
      </div>
    </section>

    <div
      v-if="activeIndex !== null"
      class="fixed inset-0 z-[500] flex items-center justify-center bg-black/80 p-4 sm:p-6"
      @click.self="closeImage"
    >
      <button
        class="absolute left-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/35 bg-black/50 px-3 py-2 text-2xl text-white transition hover:bg-black/75"
        type="button"
        aria-label="Previous image"
        @click="showPrev"
      >
        &lt;
      </button>
      <div class="relative z-10 w-full max-w-4xl rounded-2xl border border-zinc-300/20 bg-black/30 p-2">
        <button
          class="absolute right-3 top-3 rounded-full border border-white/25 bg-black/50 px-3 py-1 text-sm text-white transition hover:bg-black/75"
          type="button"
          aria-label="Close lightbox"
          @click="closeImage"
        >
          ✕
        </button>
        <img
          :src="galleryItems[activeIndex].src"
          :alt="galleryItems[activeIndex].category"
          class="max-h-[70vh] w-full rounded-xl object-contain"
          loading="eager"
        />
      </div>
      <button
        class="absolute right-3 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/35 bg-black/50 px-3 py-2 text-2xl text-white transition hover:bg-black/75"
        type="button"
        aria-label="Next image"
        @click="showNext"
      >
        &gt;
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

type GalleryItem = {
  category: string
  note: string
  orientation: 'portrait' | 'landscape'
  src?: string
}

const galleryItems = [
  { category: 'Portrait', note: 'Outdoor', orientation: 'portrait', src: '/images/gallery/portraits.webp' },
  { category: 'Couple', note: 'Candid laughter', orientation: 'portrait', src: '/images/gallery/couple.webp' },
  { category: 'Family', note: 'At-home storytelling', orientation: 'portrait', src: '/images/gallery/family.webp' },
  { category: 'Editorial', note: 'Moody studio', orientation: 'portrait', src: '/images/gallery/editorial.webp' },
  { category: 'Wedding', note: 'First dance', orientation: 'landscape', src: '/images/gallery/wedding.webp' },
  { category: 'Details', note: 'Rings & florals', orientation: 'landscape', src: '/images/gallery/details.webp' },
  { category: 'Ceremony', note: 'Walking the aisle', orientation: 'landscape', src: '/images/gallery/ceremony.webp' },
  { category: 'Brand', note: 'Workspace story', orientation: 'landscape', src: '/images/gallery/brand.webp' }
] satisfies GalleryItem[]

const activeIndex = ref<number | null>(null)

const openImage = (index: number) => {
  activeIndex.value = index
}

const closeImage = () => {
  activeIndex.value = null
}

const showPrev = () => {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value - 1 + galleryItems.length) % galleryItems.length
}

const showNext = () => {
  if (activeIndex.value === null) return
  activeIndex.value = (activeIndex.value + 1) % galleryItems.length
}

const handleLightboxKeys = (event: KeyboardEvent) => {
  if (activeIndex.value === null) return

  if (event.key === 'ArrowLeft' || event.key === '<' || event.key === ',') {
    event.preventDefault()
    showPrev()
    return
  }

  if (event.key === 'ArrowRight' || event.key === '>' || event.key === '.') {
    event.preventDefault()
    showNext()
    return
  }

  if (event.key === 'Escape') {
    event.preventDefault()
    closeImage()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleLightboxKeys)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleLightboxKeys)
})
</script>

