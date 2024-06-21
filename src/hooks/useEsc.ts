import { useEffect } from 'react'

/**
 * Hook to handle the escape key.
 * @param handleEscapeKeyCallback - The callback function to handle the escape key.
 */
function useEscapeKey(handleEscapeKeyCallback: () => void) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleEscapeKeyCallback()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleEscapeKeyCallback])
}

export default useEscapeKey
