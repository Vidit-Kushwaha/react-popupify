import ReactDOM from 'react-dom'
import Popup from './Popup'
import { PopupContainerProps, PopupHandle, defualtProps } from '../type'
import '../styles/index.scss'
import { forwardRef, useEffect, useRef, useState } from 'react'
import { DefaultConfig } from '../utils/constant'

const defaultProps: defualtProps = {
  autoClose: false,
  closeOnOutsideClick: true,
  closeOnEscape: true,
  animation: 'fade',
  duration: 300,
  closeButton: true,
}

const PopupContainer = forwardRef<HTMLDivElement, PopupContainerProps>(
  (props, ref) => {
    const continerProps = { ...defaultProps, ...props }
    const { open } = continerProps
    const containerRef = useRef<HTMLDivElement | null>(null)
    const popupRef = useRef<PopupHandle | null>(null)

    const [isOpen, setIsOpen] = useState(open)

    useEffect(() => {
      setIsOpen(open)
    }, [open])

    const getRootPopup = () => {
      let popupElment = document.getElementById('popup-root')

      if (popupElment === null) {
        popupElment = document.createElement('div')
        popupElment.setAttribute('id', 'popup-root')
        document.body.appendChild(popupElment)
      }

      return popupElment
    }

    const content = (
      <div
        ref={containerRef}
        className={`${DefaultConfig.CSS_NAMESPACE}_popup-container`}
      >
        <Popup
          ref={popupRef}
          onClickClose={() => setIsOpen(!isOpen)}
          {...continerProps}
        >
          {props.children}
        </Popup>
      </div>
    )

    return isOpen ? ReactDOM.createPortal(content, getRootPopup()) : null
  }
)

export default PopupContainer
