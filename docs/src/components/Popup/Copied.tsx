import React from 'react'
import { Popup } from 'react-popupify'

const Copied = () => {
  return (
    <Popup
      popupId="copyId"
      animation="flip"
      duration={200}
      autoClose={850}
      closeOnEscape={true}
      closeOnOutsideClick={true}
      closeButton={false}
      open={false}
      backdropClassName="popup-backdrop"
      popupClassName="popup-container"
    >
      <div className="text-black ">Copied!</div>
    </Popup>
  )
}

export default Copied
