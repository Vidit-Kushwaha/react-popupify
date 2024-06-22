import { useEffect } from 'react'

const useFocusTrap = (ref: React.RefObject<HTMLElement>, isActive: boolean) => {
  useEffect(() => {
    if (!ref.current || !isActive) return

    const rootElement = ref.current
    const focusableElementsString = `
      a[href], area[href], input:not([disabled]), select:not([disabled]), 
      textarea:not([disabled]), button:not([disabled]), iframe, object, embed, 
      [tabindex="0"], [contenteditable], [tabindex]:not([tabindex="-1"])
    `
    let firstFocusableElement: HTMLElement | null
    let lastFocusableElement: HTMLElement | null
    let focusableElements: NodeListOf<HTMLElement>

    const setFocusableElements = () => {
      focusableElements = rootElement.querySelectorAll(focusableElementsString)
      firstFocusableElement = focusableElements[0]
      lastFocusableElement = focusableElements[focusableElements.length - 1]
    }

    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !focusableElements.length) return

      if (event.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement?.focus()
          event.preventDefault()
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement?.focus()
          event.preventDefault()
        }
      }
    }

    const focusFirstElement = () => {
      setFocusableElements()
      firstFocusableElement?.focus()
    }

    document.addEventListener('keydown', trapFocus)
    focusFirstElement()

    return () => {
      document.removeEventListener('keydown', trapFocus)
    }
  }, [ref, isActive])
}

export default useFocusTrap
