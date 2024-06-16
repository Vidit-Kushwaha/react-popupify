import React, { useState } from 'react'
import { PopupContainer } from 'react-popupify'
import 'react-popupify/dist/bundle.css'
import '../css/App.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    console.log('onClose')
    setIsOpen(false)
  }
  

  return (
    <div>
      <script src="https://cdn.tailwindcss.com"></script>
      <button className="button" onClick={() => setIsOpen(!isOpen)}>
        Open Popup
      </button>
      <PopupContainer
        animation="bounce"
        duration={400}
        open={isOpen}
        closeOnEscape={true}
        closeOnOutsideClick={true}
        closeButton={false}
        onClose={onClose}
        backdropClassName="backdrop"
        popupClassName="popup"
      >
        Say Hello to React-Poupify !
      </PopupContainer>

      <div>

      </div>
    </div>
  )
}

export default App
