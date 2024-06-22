// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import React, {
  ForwardRefRenderFunction,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { PopupContainerProps, PopupHandle } from '../type'
import useOutsideClick from '../hooks/useOutsideClick'
import useEscapeKey from '../hooks/useEsc'
import CloseButton from './CloseButton'
import Transition from './Transition'
import { DefaultConfig } from '../utils/constant'
import useScrollLock from '../hooks/useScrollLock'
import useFocusTrap from '../hooks/useFocusTrap'

type PopupPropsExtended = PopupContainerProps & {
  onClickClose?: (isClose: boolean) => void
}

/**
 * The PopupContainer component displays a modal dialog.
 * @param props - The properties of the PopupContainer component.
 * @returns The JSX element for the PopupContainer component.
 */
const PopupContainer: ForwardRefRenderFunction<
  PopupHandle,
  PopupPropsExtended
> = (
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
    popupClassName,
    popupId,
  },
  ref
) => {
  const [isOpen, setIsOpen] = useState(open)
  const rootRef = useRef<HTMLDivElement | null>(null)

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsOpen(true)
    },
    close: () => {
      setIsOpen(false)
    },
  }))

  const handleClose = useCallback(() => {
    onClickClose && onClickClose(false)
    onClose && onClose()
    setIsOpen(false)
  }, [onClose, onClickClose])

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
  }, [open, autoClose, handleClose])

  closeOnOutsideClick && useOutsideClick(rootRef, handleClose)
  closeOnEscape && useEscapeKey(handleClose)

  useScrollLock(isOpen)
  useFocusTrap(rootRef, isOpen)

  const CloseButtonProps = {
    closePopup: handleClose,
  }
  let Close: React.ReactNode = null

  if (closeButton) {
    if (typeof closeButton === 'function') {
      Close = closeButton(CloseButtonProps)
    } else if (React.isValidElement(closeButton)) {
      Close = React.cloneElement(closeButton, CloseButtonProps)
    } else {
      Close = CloseButton(CloseButtonProps)
    }
  }

  return (
    <Transition
      animation={animation}
      in={isOpen}
      duration={duration}
      nodeRef={rootRef}
    >
      <div
        ref={rootRef}
        id={popupId as string}
        className={`${DefaultConfig.CSS_NAMESPACE}_popup-container !${popupClassName?.replaceAll(' ', ' !')} `}
      >
        {children}
        <div className="button-close">{Close}</div>
      </div>
    </Transition>
  )
}

PopupContainer.displayName = 'PopupContainer'

export default React.forwardRef(PopupContainer)
