import { useEffect } from 'react'

/**
 * Hook to handle the outside click.
 * @param ref - The reference to the HTML div element.
 * @param handleClickOutsideCallback - The callback function to handle the outside click.
 * @param enabled - The flag to enable or disable the hook.
 */
function useOutsideClick(
  ref: React.RefObject<HTMLDivElement>,
  handleClickOutsideCallback: () => void,
  enabled: boolean
) {
  useEffect(() => {
    if (!enabled) return

    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleClickOutsideCallback()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, handleClickOutsideCallback, enabled])
}

export default useOutsideClick
