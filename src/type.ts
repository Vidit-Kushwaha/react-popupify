import React from 'react'

/**
 * Interface for Popup handle methods.
 */
export interface PopupHandle {
  /**
   * Method to open the popup.
   */
  open: () => void

  /**
   * Method to close the popup.
   */
  close: () => void
}

/**
 * Props for the CloseButton component.
 */
export interface CloseButtonProps {
  /**
   * Function to close the popup.
   * @param e - The mouse event.
   */
  closePopup: (e: React.MouseEvent<HTMLElement>) => void

  /**
   * Aria label for accessibility.
   */
  ariaLabel?: string
}

/**
 * Type alias for Popup ID.
 */
export type Id = string

/**
 * Possible animation types for the popup. e.g. 'bounce', 'flip', 'zoom', 'fade'.
 */
export type Animation = 'bounce' | 'flip' | 'zoom' | 'fade'

/**
 * Props for the transition component.
 */
export interface TransitionProps {
  /**
   * Type of animation for the transition.
   */
  animation: Animation

  /**
   * Duration of the animation in milliseconds.
   */
  duration?: number

  /**
   * Child elements to be rendered inside the transition.
   */
  children: React.ReactNode

  /**
   * Flag indicating if the transition is in progress.
   */
  in: boolean

  /**
   * Reference to the HTML div element.
   */
  nodeRef: React.RefObject<HTMLDivElement>

  /**
   * Callback when the transition has entered.
   */
  onEntered?: () => void

  /**
   * Callback when the transition has exited.
   */
  onExited?: () => void
}

/**
 * Common options for popup configuration.
 */
interface CommonOptions {
  /**
   * Flag indicating if the popup is open.
   */
  open: boolean

  /**
   * Callback function to handle popup close event.
   */
  onClose?: () => void

  /**
   * Duration in milliseconds after which the popup will automatically close.
   */
  autoClose?: number | false

  /**
   * Flag indicating if the popup should close when clicked outside.
   */
  closeOnOutsideClick?: boolean

  /**
   * Flag indicating if the popup should close on escape key press.
   */
  closeOnEscape?: boolean

  /**
   * Close button configuration. It can be a boolean, a function returning a React node, or a React element.
   */
  closeButton?:
    | boolean
    | ((props: CloseButtonProps) => React.ReactNode)
    | React.ReactElement<CloseButtonProps>
}

/**
 * Props for the PopupContainer component.
 */
export interface PopupContainerProps extends CommonOptions {
  /**
   * Child elements to be rendered inside the popup container.
   */
  children: React.ReactNode

  /**
   * ID for the popup.
   */
  popupId?: Id

  /**
   * Type of animation for the popup.
   */
  animation: Animation

  /**
   * Duration of the animation in milliseconds.
   */
  duration: number

  /**
   * Additional class name for the popup.
   */
  popupClassName?: string
}

/**
 * Props for the Popup component.
 */
export interface PopupProps extends PopupContainerProps {
  /**
   * Additional class name for the backdrop.
   */
  backdropClassName?: string
}

/**
 * Extended properties for showing a popup.
 */
export interface ShowPopup extends CommonOptions {
  /**
   * Type of animation for the popup.
   */
  animation?: Animation

  /**
   * Duration of the animation in milliseconds.
   */
  duration?: number

  /**
   * Additional class name for the popup.
   */
  popupClassName?: string

    /**
   * Additional class name for the backdrop.
   */
  backdropClassName?: string
}
