<template>
  <div class="mx-auto max-w-6xl px-4 pb-20 pt-10 text-slate-900 dark:text-slate-50 lg:px-6 lg:pt-12">
    <header data-reveal class="max-w-2xl">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-200">
        Gallery
      </p>
      <h1 class="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        A grid for your favorite photos.
      </h1>
      <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">
        Put your images in `public/images/gallery/` and update the `src` values in this page.
      </p>
    </header>

    <section class="mt-10">
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
        <div
          v-for="(item, index) in galleryItems"
          :key="index"
          data-reveal
          class="group relative aspect-[3/4] overflow-hidden rounded-xl border border-slate-300 bg-gradient-to-br from-slate-200 to-slate-400 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-slate-500 dark:border-white/20 dark:from-slate-700 dark:to-slate-900 dark:hover:border-white/35"
        >
          <img
            v-if="item.src"
            :src="item.src"
            alt=""
            loading="lazy"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div
            v-else
            class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.45),_transparent_55%)] opacity-75 group-hover:opacity-100"
          />

          <div
            class="absolute inset-0 flex flex-col justify-between p-3 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-800 dark:text-slate-200"
          >
            <div class="flex justify-between">
              <span>{{ item.category }}</span>
              <span>{{ index + 1 | toLabel }}</span>
            </div>
            <div class="flex justify-between text-[9px] text-slate-600 dark:text-slate-300">
              <span>{{ item.note }}</span>
              <span>{{ item.src ? 'View' : 'Add photo' }}</span>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-6 text-xs text-slate-500 dark:text-slate-400">
        Example: if your file is `public/images/gallery/01-portrait.jpg`, set `src` to
        `/images/gallery/01-portrait.jpg`.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
type GalleryItem = {
  category: string
  note: string
  src?: string
}

const galleryItems = [
  { category: 'Portrait', note: 'Outdoor golden hour', src: '' },
  { category: 'Couple', note: 'Candid laughter', src: '' },
  { category: 'Family', note: 'At‑home storytelling', src: '' },
  { category: 'Wedding', note: 'First dance', src: '' },
  { category: 'Details', note: 'Rings & florals', src: '' },
  { category: 'Ceremony', note: 'Walking the aisle', src: '' },
  { category: 'Editorial', note: 'Moody studio', src: '' },
  { category: 'Brand', note: 'Workspace story', src: '' }
] satisfies GalleryItem[]

const toLabel = (value: number) => value.toString().padStart(2, '0')
</script>

