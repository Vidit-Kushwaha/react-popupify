import { useEffect } from 'react'

/**
 * Hook to handle the escape key.
 * @param handleEscapeKeyCallback - The callback function to handle the escape key.
 * @param enabled - The flag to enable or disable the hook.
 */
function useEscapeKey(handleEscapeKeyCallback: () => void, enabled: boolean) {
  useEffect(() => {
    if (!enabled) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleEscapeKeyCallback()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleEscapeKeyCallback, enabled])
}

export default useEscapeKey
