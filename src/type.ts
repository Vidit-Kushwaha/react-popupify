import React from 'react'

export interface PopupHandle {
  open: () => void
  close: () => void
}

export interface CloseButtonProps {
  closePopup: (e: React.MouseEvent<HTMLElement>) => void
  ariaLabel?: string
}

export type Id = number | string

interface CommonOptions {
  children: React.ReactNode
  open?: boolean
  closeOnClick?: boolean
  autoClose?: number | false
  closeOnOutsideClick?: boolean
  closeOnEscape?: boolean
  transition?: string | object
  closeButton?:
    | boolean
    | ((props: CloseButtonProps) => React.ReactNode)
    | React.ReactElement<CloseButtonProps>
}

export interface PopupProps extends CommonOptions {
  className?: string
  style?: React.CSSProperties
  popupId?: Id
  updateId?: Id
  delay?: number
}
