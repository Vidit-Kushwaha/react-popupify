import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import ReactDOM from 'react-dom'
import { PopupHandle, PopupOptions } from './type'
import useOutsideClick from './hooks/useOutsideClick'
import useEscapeKey from './hooks/useEsc'

const Popup = forwardRef<PopupHandle, PopupOptions>(
  (
    {
      open = false,
      className = '',
      children,
      closeOnEscape = true,
      closeOnOutsideClick = true,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(open)
    const rootRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
      setIsOpen(open)
    }, [open])

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }))

    const getRootPopup = () => {
      let popupElment = document.getElementById('popup-root')

      if (popupElment === null) {
        popupElment = document.createElement('div')
        popupElment.setAttribute('id', 'popup-root')
        document.body.appendChild(popupElment)
      }

      return popupElment
    }

    const handleClose = () => {
      setIsOpen(false)
    }

    closeOnOutsideClick && useOutsideClick(rootRef, handleClose)
    closeOnEscape && useEscapeKey(handleClose)

    const content = (
      <div
        className={className}
        style={{
          display: isOpen ? 'block' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9999,
        }}
      >
        <div
          ref={rootRef}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '5px',
          }}
        >
          {children}
        </div>
      </div>
    )

    return isOpen ? ReactDOM.createPortal(content, getRootPopup()) : null
  }
)

export default Popup
