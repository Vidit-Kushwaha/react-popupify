import React, { useRef } from 'react'
import { PopupHandle } from './type'
import Popup from './components/Popup'

export const App = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const popupRef = useRef<PopupHandle>(null)

  return (
    <>
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>Open Popup</button>
        <Popup
          ref={popupRef}
          open={isOpen}
          closeOnEscape={false}
          closeOnOutsideClick={false}
          closeButton={true}
        >
          <p>This is the content of the popup.</p>
        </Popup>
      </div>
    </>
  )
}
