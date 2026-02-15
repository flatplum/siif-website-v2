import type { RouterConfig } from '@nuxt/schema'
import { nextTick } from 'vue'

export default <RouterConfig>{
  scrollBehavior: async (to, from, savedPosition) => {
    // If browser back/forward, use saved position (but only horizontal)
    if (savedPosition) {
      return {
        left: savedPosition.left || 0,
        top: 0, // ignore saved vertical to avoid sticking to bottom
        behavior: 'smooth'
      }
    }

    // Routes where we want to preserve offset from top
    const keepScrollPrefixes = ['/committee/', '/contact/']

    const shouldKeepScroll = keepScrollPrefixes.some(
      (prefix) => to.path.startsWith(prefix) && from.path.startsWith(prefix)
    )

    if (shouldKeepScroll) {
      // Wait for DOM render
      await nextTick()

      // Optionally wait a little longer for images / async content
      await new Promise((resolve) => setTimeout(resolve, 50))

      // Compute offset from top
      const topOffset = window.scrollY || 0
      return { left: 0, top: topOffset, behavior: 'smooth' }
    }

    // Default: scroll to top
    await nextTick()
    return { left: 0, top: 0, behavior: 'smooth' }
  }
}
