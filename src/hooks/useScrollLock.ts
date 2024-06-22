import { useEffect } from 'react'

/**
 * Hook to lock and unlock scrolling on the body element.
 * @param lock - Whether to lock scrolling.
 */
const useScrollLock = (lock: boolean) => {
  useEffect(() => {
    if (lock) {
      const scrollX = window.scrollX
      const scrollY = window.scrollY

      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.top = `-${scrollY}px`

      return () => {
        document.body.style.overflow = ''
        document.body.style.position = ''
        document.body.style.width = ''
        document.body.style.top = ''

        window.scrollTo(scrollX, scrollY)
      }
    }
  }, [lock])
}

export default useScrollLock
