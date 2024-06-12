import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import ReactDOM from 'react-dom'
import { PopupHandle, PopupProps } from './type'
import useOutsideClick from './hooks/useOutsideClick'
import useEscapeKey from './hooks/useEsc'
import CloseButton from './components/CloseButton'
import { Transition } from './components/Transition'
import './styles/index.scss'

const Popup = forwardRef<PopupHandle, PopupProps>(
  (
    {
      open = false,
      className = '',
      children,
      closeOnEscape = true,
      closeOnOutsideClick = true,
      closeButton = true,
      popupId,
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

    const content = (
      <div
        className={className}
        id={popupId as string}
        style={{
          display: isOpen ? 'block' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 9999,
          animationDuration: '400ms'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Transition animation="flip" in={isOpen} duration={400}>
            <div
              ref={rootRef}
              style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '5px',
              }}
            >
              {Close}
              {children}
            </div>
          </Transition>
        </div>
      </div>
    )

    return isOpen ? ReactDOM.createPortal(content, getRootPopup()) : null
  }
)

export default Popup
