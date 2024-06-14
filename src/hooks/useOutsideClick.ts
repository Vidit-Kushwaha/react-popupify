'use client'

import { useEffect } from 'react'

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideClick(
  ref: React.RefObject<HTMLDivElement>,
  handleClickOutsideCallback: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleClickOutsideCallback()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, handleClickOutsideCallback])
}

export default useOutsideClick
