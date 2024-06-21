'use client'

import React, { forwardRef, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { PopupHandle, PopupProps, defualtProps } from '../type'
import '../styles/index.scss'

import { DefaultConfig } from '../utils/constant'
import PopupContainer from './PopupContainer'
import popupManager from '../utils/popupManager'
import { genPopupId } from '../utils/genPopupId'

const defaultProps: defualtProps = {
  open: false,
  autoClose: false,
  closeOnOutsideClick: true,
  closeOnEscape: true,
  animation: 'fade',
  duration: 300,
  closeButton: true,
}

const Popup = forwardRef<HTMLDivElement, PopupProps>(
  (props, ref) => {
    const continerProps = { ...defaultProps, ...props }
    const { open, backdropClassName , duration, popupId } = continerProps
    const popupRef = useRef<PopupHandle | null>(null)

    const [isOpen, setIsOpen] = useState(open)

    const id  : string  = popupId || genPopupId()

    useEffect(() => {
      popupManager.registerPopup(id!, {
        show: () => {
          setIsOpen(true);
        },
        hide: () => {
          setIsOpen(false);
        },
      });
  
      return () => {
        popupManager.unregisterPopup(id!);
      };
    }, [id]);

    useEffect(() => {
    }, [isOpen]);

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
        ref={ref}
        className={`${DefaultConfig.CSS_NAMESPACE}_popup ${backdropClassName}`}
        style={{
          visibility: isOpen ? 'visible' : 'hidden',
          opacity: isOpen ? '1' : '0',
          transition: `visibility ${duration}ms ease-in-out`,
        }}
      >
        <PopupContainer
          ref={popupRef}
          onClickClose={() => setIsOpen(!isOpen)}
          {...continerProps}
        >
          {props.children}
        </PopupContainer>
      </div>
    )

    return isOpen ? ReactDOM.createPortal(content, getRootPopup()) : null
  }
)

Popup.displayName = 'Popup'

export default Popup
