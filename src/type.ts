import React from 'react'

export interface PopupHandle {
  open: () => void
  close: () => void
}

export interface CloseButtonProps {
  closePopup: (e: React.MouseEvent<HTMLElement>) => void
  ariaLabel?: string
}

export type Id = string

export type Animation = 'bounce' | 'flip' | 'zoom' | 'fade'

export interface TransitionProps {
  animation: Animation
  duration?: number
  children: React.ReactNode
  in: boolean
  nodeRef: React.RefObject<HTMLDivElement>
  onEntered?: () => void
  onExited?: () => void
}

interface CommonOptions {
  open: boolean
  onClose?: () => void
  autoClose?: number | false
  closeOnOutsideClick?: boolean
  closeOnEscape?: boolean
  closeButton?:
    | boolean
    | ((props: CloseButtonProps) => React.ReactNode)
    | React.ReactElement<CloseButtonProps>
}

export interface PopupContainerProps extends CommonOptions {
  children: React.ReactNode
  popupId?: Id
  animation: Animation
  duration: number
  popupClassName?: string
}

export interface PopupProps extends PopupContainerProps {
  backdropClassName?: string
}

export interface ShowPopup extends CommonOptions {
  animation?: Animation
  duration?: number
  popupClassName?: string
}
