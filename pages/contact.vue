<template>
  <div class="mx-auto max-w-3xl px-4 pb-20 pt-10 text-slate-900 dark:text-slate-50 lg:px-6 lg:pt-12">
    <header data-reveal class="max-w-2xl">
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-200">
        Contact
      </p>
      <h1 class="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Let&apos;s plan your next session.
      </h1>
      <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">
        This form is just a front‑end mockup. Connect it to your preferred email service or form
        backend later. For now, it shows all the fields you might want to collect from potential
        clients.
      </p>
    </header>

    <section data-reveal class="mt-8 rounded-2xl border border-slate-300 bg-white p-5 text-slate-800 transition-all duration-300 ease-out hover:shadow-md hover:border-slate-500 dark:border-white/20 dark:bg-white/5 dark:text-slate-100 dark:hover:border-white/35 sm:p-6">
      <form class="space-y-5">
        <div class="grid gap-4 sm:grid-cols-2">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-300">
              Name
            </label>
            <input
              type="text"
              placeholder="Full name"
              class="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900/20 dark:border-white/15 dark:bg-slate-900/60 dark:text-slate-100 dark:focus:border-white dark:focus:ring-white/30"
            >
          </div>
          <div>
            <label class="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-300">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              class="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900/20 dark:border-white/15 dark:bg-slate-900/60 dark:text-slate-100 dark:focus:border-white dark:focus:ring-white/30"
            >
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-300">
              Phone (optional)
            </label>
            <input
              type="tel"
              placeholder="+63 ..."
              class="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900/20 dark:border-white/15 dark:bg-slate-900/60 dark:text-slate-100 dark:focus:border-white dark:focus:ring-white/30"
            >
          </div>
          <div>
            <label class="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-300">
              Instagram / Facebook (optional)
            </label>
            <input
              type="text"
              placeholder="@yourhandle or profile link"
              class="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900/20 dark:border-white/15 dark:bg-slate-900/60 dark:text-slate-100 dark:focus:border-white dark:focus:ring-white/30"
            >
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div>
            <label class="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-300">
              What are you looking for?
            </label>
            <select
              class="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900/20 dark:border-white/15 dark:bg-slate-900/60 dark:text-slate-100 dark:focus:border-white dark:focus:ring-white/30"
            >
              <option>Choose a session type</option>
              <option>Wedding / Event</option>
              <option>Couple / Engagement</option>
              <option>Family / Lifestyle</option>
              <option>Portrait / Personal Branding</option>
              <option>Brand / Content Session</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-300">
              Ideal date & location
            </label>
            <input
              type="text"
              placeholder="Example: June 15, Manila"
              class="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900/20 dark:border-white/15 dark:bg-slate-900/60 dark:text-slate-100 dark:focus:border-white dark:focus:ring-white/30"
            >
          </div>
        </div>

        <div>
          <label class="block text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-300">
            Tell me about your vision
          </label>
          <textarea
            rows="4"
            placeholder="Share what you&apos;re dreaming up, who will be there, and anything that matters to you."
            class="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900/20 dark:border-white/15 dark:bg-slate-900/60 dark:text-slate-100 dark:focus:border-white dark:focus:ring-white/30"
          />
        </div>

        <button
          type="button"
          class="w-full rounded-full border border-slate-300 bg-slate-100 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-900 shadow-sm transition hover:bg-slate-200 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
        >
          This button is a mockup (wire it later)
        </button>

        <p class="text-xs text-slate-500 dark:text-slate-400">
          Tip: later, connect this form to email (via a simple API route, Formspree, Getform, or your
          own backend) so inquiries arrive directly in your inbox.
        </p>
      </form>
    </section>
  </div>
</template>

