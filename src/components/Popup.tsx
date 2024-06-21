'use client'

import React, {
  ForwardRefRenderFunction,
  useEffect,
  useRef,
  useState,
} from 'react'
import ReactDOM from 'react-dom'
import { PopupHandle, PopupProps } from '../type'
import { DefaultConfig } from '../utils/constant'
import PopupContainer from './PopupContainer'
import popupManager from '../utils/popupManager'
import { genPopupId } from '../utils/genPopupId'

const getRootPopup = () => {
  let popupElement = document.getElementById('popup-root')

  if (!popupElement) {
    popupElement = document.createElement('div')
    popupElement.setAttribute('id', 'popup-root')
    document.body.appendChild(popupElement)
  }

  return popupElement
}

/**
 * Default properties for the Popup component.
 */
const defaultPopupProps: Partial<PopupProps> = {
  open: false,
  autoClose: false,
  closeOnOutsideClick: true,
  closeOnEscape: true,
  animation: 'fade',
  duration: 300,
  closeButton: true,
}

/**
 * The Popup component displays a modal dialog.
 * @param props - The properties of the Popup component.
 * @returns The Popup component.
 * @example
 * ```tsx
 * <Popup animation="bounce" duration={500} open={open} onClose={onClose}>
 *    Hello
 * </Popup>
 * ```
 */
const Popup: ForwardRefRenderFunction<HTMLDivElement, PopupProps> = (
  props,
  ref
) => {
  const containerProps = { ...defaultPopupProps, ...props }
  const { open, backdropClassName, popupId } = containerProps

  const [isOpen, setIsOpen] = useState(open)
  const [additionalProps, setAdditionalProps] = useState<Partial<PopupProps>>(
    {}
  )
  const popupRef = useRef<PopupHandle | null>(null)

  const id: string = popupId || genPopupId()

  useEffect(() => {
    popupManager.registerPopup(id, {
      show: (props?: Partial<PopupProps>) => {
        if (props) setAdditionalProps(props)
        setIsOpen(true)
      },
      hide: () => setIsOpen(false),
    })

    return () => popupManager.unregisterPopup(id)
  }, [id])

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  useEffect(() => {
    if (!isOpen) {
      setAdditionalProps({})
    }
  }, [isOpen])

  const mergedProps = { ...containerProps, ...additionalProps }

  const content = (
    <div
      ref={ref}
      className={`${DefaultConfig.CSS_NAMESPACE}_popup ${backdropClassName}`}
    >
      <PopupContainer
        ref={popupRef}
        onClickClose={() => setIsOpen(false)}
        {...mergedProps}
      >
        {props.children}
      </PopupContainer>
    </div>
  )

  return isOpen ? ReactDOM.createPortal(content, getRootPopup()) : null
}

Popup.displayName = 'Popup'

export default React.forwardRef(Popup)
