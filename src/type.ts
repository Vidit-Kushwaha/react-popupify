export interface PopupHandle {
    open: () => void
    close: () => void
  }

export interface PopupOptions {
    children: React.ReactNode
    className?: string
    closeOnEscape?: boolean | true
    closeOnOutsideClick?: boolean | true
    open?: boolean
    style?:  React.CSSProperties
    } 