import { useEffect } from 'react'

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
