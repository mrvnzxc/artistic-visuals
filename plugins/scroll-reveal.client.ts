export default defineNuxtPlugin((nuxtApp) => {
  const initReveal = () => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-reveal-init])')
    )

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          const delay = el.dataset.revealDelay ?? '0'
          el.style.transitionDelay = `${delay}ms`
          el.classList.add('is-revealed')
          obs.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    for (const el of elements) {
      el.setAttribute('data-reveal-init', 'true')
      observer.observe(el)
    }
  }

  nuxtApp.hook('page:finish', () => {
    requestAnimationFrame(initReveal)
  })

  requestAnimationFrame(initReveal)
})

