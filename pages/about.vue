<template>
  <div class="mx-auto max-w-5xl px-4 pb-20 pt-10 text-slate-900 dark:text-slate-50 lg:px-6 lg:pt-12">
    <header data-reveal>
      <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-zinc-400">
        About me
      </p>
      <h1 class="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        Joshua Martinez Austria
      </h1>
      <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
        Photographer based in the Philippines — Artistic Visuals
      </p>
    </header>

    <section
      data-reveal
      class="mt-6 grid gap-6 rounded-2xl border border-slate-300/90 bg-white/80 p-6 text-sm text-slate-700 shadow-sm shadow-black/5 ring-1 ring-zinc-900/[0.06] transition-all duration-300 ease-out hover:border-zinc-400/80 hover:shadow-md hover:shadow-black/10 dark:border-zinc-700/50 dark:bg-zinc-950/40 dark:text-zinc-200 dark:ring-zinc-500/10 dark:hover:border-zinc-500/40 lg:grid-cols-[1.4fr_1fr]"
    >
      <div class="space-y-4 leading-relaxed">
        <p>
          Hi, I&apos;m Joshua Martinez Austria — a photographer based in the Philippines with a passion
          for capturing real moments and genuine emotions.
        </p>
        <p>
          I started my journey in photography during the pandemic using my phone. What began as a simple
          hobby quickly turned into something deeper, as I explored different places and captured everyday
          life, including candid shots of strangers.
        </p>
        <p>
          Over time, that passion grew, and I began working with clients on special occasions like weddings
          and birthdays. My style is natural, emotional, and story-driven, focusing on real connections and
          unplanned moments.
        </p>
        <p>
          My goal is to make you feel comfortable, seen, and confident in front of the camera while
          creating photos you can cherish for years.
        </p>
      </div>

      <aside
        data-reveal
        class="flex items-center justify-center rounded-xl border border-slate-300/90 bg-white p-4 transition-all duration-300 ease-out hover:border-zinc-400/70 dark:border-zinc-700/50 dark:bg-black/30 dark:hover:border-zinc-500/50 lg:p-6"
      >
        <img
          src="/images/logo/avlight.jpg"
          alt="Artistic Visuals logo"
          class="max-h-52 w-auto dark:hidden lg:max-h-64"
          loading="lazy"
        />
        <img
          src="/images/logo/avdark.jpg"
          alt="Artistic Visuals logo"
          class="hidden max-h-52 w-auto dark:block lg:max-h-64"
          loading="lazy"
        />
      </aside>
    </section>
  </div>
</template>

