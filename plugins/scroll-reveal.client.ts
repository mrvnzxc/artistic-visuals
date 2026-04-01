export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null

  const setup = () => {
    observer?.disconnect()

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement
          if (entry.isIntersecting) {
            const delay = el.dataset.revealDelay ?? '0'
            el.style.transitionDelay = `${delay}ms`
            el.classList.add('is-revealed')
          } else {
            el.style.transitionDelay = '0ms'
            el.classList.remove('is-revealed')
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' }
    )

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      observer!.observe(el)
    })
  }

  nuxtApp.hook('page:finish', () => {
    requestAnimationFrame(setup)
  })

  requestAnimationFrame(setup)
})
