import { ref, onUnmounted } from 'vue'

export function useIntersectionObserver(targetRef, options, onIntersect) {
  const hasIntersected = ref(false)
  let observer = null

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (!hasIntersected.value && entry.isIntersecting) {
        hasIntersected.value = true
        onIntersect()
      }
    })
  }

  const observe = () => {
    if (targetRef.value instanceof Element) {
      observer = new IntersectionObserver(handleIntersection, options)
      observer.observe(targetRef.value)
    }
  }

  // Cleanup on component unmount
  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  // Start observing when the component is mounted
  observe()

  return { hasIntersected }
}
