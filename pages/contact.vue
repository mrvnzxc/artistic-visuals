<template>
  <div class="mx-auto max-w-3xl px-4 pb-20 pt-10 text-slate-900 dark:text-zinc-50 lg:px-6 lg:pt-12">
    <header data-reveal class="max-w-2xl">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-zinc-400">
        Contact
      </p>
      <h1 class="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Let&apos;s plan your next session.
      </h1>
    </header>

    <section data-reveal class="mt-8 rounded-2xl border border-slate-300/90 bg-white/90 p-5 text-slate-800 shadow-sm shadow-black/5 ring-1 ring-zinc-900/[0.06] transition-all duration-300 ease-out hover:border-zinc-400/80 hover:shadow-md hover:shadow-black/10 dark:border-zinc-700/50 dark:bg-zinc-950/40 dark:text-zinc-100 dark:ring-zinc-500/10 dark:hover:border-zinc-500/40 sm:p-6">
      <form class="space-y-5">
        <div class="grid gap-4 sm:grid-cols-2">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-700 dark:text-zinc-300">
              Name
            </label>
            <input
              type="text"
              placeholder="Full name"
              class="mt-2 w-full rounded-xl border border-slate-300/90 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 transition-colors duration-200 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400/30 dark:border-white/12 dark:bg-black/40 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-400 dark:focus:ring-zinc-500/25"
            >
          </div>
          <div>
            <label class="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-700 dark:text-zinc-300">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              class="mt-2 w-full rounded-xl border border-slate-300/90 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 transition-colors duration-200 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400/30 dark:border-white/12 dark:bg-black/40 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-400 dark:focus:ring-zinc-500/25"
            >
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-700 dark:text-zinc-300">
              Phone (optional)
            </label>
            <input
              type="tel"
              placeholder="+63 ..."
              class="mt-2 w-full rounded-xl border border-slate-300/90 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 transition-colors duration-200 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400/30 dark:border-white/12 dark:bg-black/40 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-400 dark:focus:ring-zinc-500/25"
            >
          </div>
          <div>
            <label class="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-700 dark:text-zinc-300">
              Instagram / Facebook (optional)
            </label>
            <input
              type="text"
              placeholder="@yourhandle or profile link"
              class="mt-2 w-full rounded-xl border border-slate-300/90 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 transition-colors duration-200 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400/30 dark:border-white/12 dark:bg-black/40 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-400 dark:focus:ring-zinc-500/25"
            >
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-700 dark:text-zinc-300">
              What are you looking for?
            </label>
            <div class="group relative mt-2">
              <select
                aria-label="Session type"
                class="session-select w-full cursor-pointer appearance-none rounded-xl border border-slate-300/90 bg-gradient-to-b from-white to-zinc-50/90 py-2.5 pl-3 pr-11 text-sm text-slate-900 shadow-sm transition-all duration-200 [color-scheme:light] hover:border-zinc-400/80 hover:shadow-md hover:shadow-black/5 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400/35 dark:border-zinc-700/60 dark:from-zinc-950/90 dark:to-black/90 dark:text-zinc-100 dark:shadow-black/20 dark:[color-scheme:dark] dark:hover:border-zinc-500/50 dark:focus:border-zinc-400 dark:focus:ring-zinc-500/25"
              >
                <option value="">
                  Choose a session type
                </option>
                <option>Wedding / Event</option>
                <option>Couple / Engagement</option>
                <option>Family / Lifestyle</option>
                <option>Portrait / Personal Branding</option>
                <option>Brand / Content Session</option>
                <option>Other</option>
              </select>
              <span
                class="pointer-events-none absolute inset-y-0 right-0 flex w-11 items-center justify-center rounded-r-xl border-l border-zinc-200/90 bg-gradient-to-b from-zinc-100 to-zinc-200/90 text-zinc-700 transition-all duration-200 group-hover:from-zinc-200 group-hover:to-zinc-300/90 group-focus-within:border-zinc-400/70 group-focus-within:from-zinc-200 group-focus-within:to-zinc-300 dark:border-zinc-700/80 dark:from-zinc-800/90 dark:to-zinc-900 dark:text-zinc-300 dark:group-hover:from-zinc-700 dark:group-hover:to-zinc-800 dark:group-focus-within:border-zinc-500/50 dark:group-focus-within:from-zinc-700 dark:group-focus-within:to-zinc-800"
                aria-hidden="true"
              >
                <Icon
                  icon="solar:alt-arrow-down-linear"
                  class="text-lg transition-transform duration-200 ease-out group-hover:translate-y-px group-focus-within:rotate-180"
                />
              </span>
            </div>
          </div>
          <div>
            <label class="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-700 dark:text-zinc-300">
              Ideal date & location
            </label>
            <input
              type="text"
              placeholder="Example: June 15, Manila"
              class="mt-2 w-full rounded-xl border border-slate-300/90 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 transition-colors duration-200 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400/30 dark:border-white/12 dark:bg-black/40 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-400 dark:focus:ring-zinc-500/25"
            >
          </div>
        </div>

        <div>
          <label class="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-700 dark:text-zinc-300">
            Tell me about your vision
          </label>
          <textarea
            rows="4"
            placeholder="Share what you&apos;re dreaming up, who will be there, and anything that matters to you."
            class="mt-2 w-full rounded-xl border border-slate-300/90 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 transition-colors duration-200 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400/30 dark:border-white/12 dark:bg-black/40 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-400 dark:focus:ring-zinc-500/25"
          />
        </div>

        <button
          type="button"
          class="w-full rounded-full border border-zinc-800/40 bg-gradient-to-r from-zinc-800 via-neutral-800 to-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-md shadow-black/25 transition hover:brightness-110 hover:shadow-lg dark:border-zinc-600/50 dark:from-zinc-700 dark:via-zinc-800 dark:to-black dark:shadow-black/40"
        >
          Send inquiry
        </button>
      </form>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<style>
.session-select option {
  background-color: #ffffff;
  color: #0f172a;
}

.dark .session-select option {
  background-color: #18181b;
  color: #fafafa;
}
</style>
