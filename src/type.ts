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

export type Animation = 'bounce' | 'flip' | 'zoom' | 'fade'

export type TransitionProps = {
  animation: Animation
  duration?: number
  children: React.ReactNode
  in: boolean
  onEntered?: () => void
  onExited?: () => void
}

interface CommonOptions {
  open?: boolean
  onClose?: () => void
  autoClose?: number | false
  closeOnOutsideClick?: boolean
  closeOnEscape?: boolean
  closeButton?:
    | boolean
    | ((props: CloseButtonProps) => React.ReactNode)
    | React.ReactElement<CloseButtonProps>
}

export interface PopupProps extends CommonOptions {
  children: React.ReactNode
  style?: React.CSSProperties
  popupId?: Id
  delay?: number
  animation: Animation
  duration: number
  popupClassName?: string
}

export interface PopupContainerProps extends PopupProps {
  children: React.ReactNode
  backdropClassName?: string
}

export interface defualtProps extends CommonOptions {
  animation: Animation
  duration: number
}
