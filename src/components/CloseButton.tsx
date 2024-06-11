import React from 'react'
import { CloseButtonProps } from '../type'
import { DefaultConfing } from '../utils/constant'

const CloseButton: React.FC<CloseButtonProps> = ({
  ariaLabel = 'Close',
  closePopup,
}) => {
  return (
    <button
      className={`${DefaultConfing.CSS_NAMESPACE}-close-button`}
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        closePopup(e)
      }}
      aria-label={ariaLabel}
    >
      <svg aria-hidden="true" viewBox="0 0 14 16">
        <path d="m7.71 8.23 3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48z" />
      </svg>
    </button>
  )
}

export default CloseButton
