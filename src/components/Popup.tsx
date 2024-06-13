import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { PopupHandle, PopupProps } from '../type'
import useOutsideClick from '../hooks/useOutsideClick'
import useEscapeKey from '../hooks/useEsc'
import CloseButton from './CloseButton'
import { Transition } from './Transition'
import { DefaultConfig } from '../utils/constant'

type PopupPropsExtended = PopupProps & {
  onClickClose?: (isClose: Boolean) => void
}

const Popup = forwardRef<PopupHandle, PopupPropsExtended>(
  (
    {
      open = false,
      children,
      closeOnEscape = true,
      closeOnOutsideClick = true,
      closeButton = true,
      animation,
      duration,
      onClose,
      onClickClose,
      autoClose,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(open)
    const rootRef = useRef<HTMLDivElement | null>(null)

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }))

    const handleClose = () => {
      onClickClose && onClickClose(false)
      onClose && onClose()
      setIsOpen(false)
    }

    useEffect(() => {
      setIsOpen(open)

      if (autoClose && open) {
        const timer = setTimeout(() => {
          handleClose()
        }, autoClose)

        return () => {
          clearTimeout(timer)
        }
      }
    }, [open])

    closeOnOutsideClick && useOutsideClick(rootRef, handleClose)
    closeOnEscape && useEscapeKey(handleClose)

    const CloseButtonProps = {
      closePopup: handleClose,
    }
    let Close: React.ReactNode = null

    if (closeButton) {
      if (typeof closeButton === 'function') {
        Close = CloseButton(CloseButtonProps)
      } else if (React.isValidElement(closeButton)) {
        Close = React.cloneElement(closeButton, CloseButtonProps)
      } else {
        Close = CloseButton(CloseButtonProps)
      }
    }

    return (
      <Transition animation={animation} in={isOpen} duration={duration}>
        <div ref={rootRef} className={`${DefaultConfig.CSS_NAMESPACE}_popup`}>
          {children}
          <div className="button-close">{Close}</div>
        </div>
      </Transition>
    )
  }
)

export default Popup
