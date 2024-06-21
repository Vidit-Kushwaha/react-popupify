import InstallPopup from './components/InstallPopup'
import '../../src/styles/index.scss'
import Popup from '../../src/components/Popup'
import { useState } from 'react'
import { showPopup } from '../../src'

const App: React.FC = () => {
  const [open, setOpen] = useState(false)

  const onClose = () => setOpen(false)

  return (
    <div>
      <button
        onClick={() =>
          showPopup('examplePopupId', {
            open: true,
            animation: 'bounce',
            duration: 500,
          })
        }
      >
        Show Popup
      </button>
      <button onClick={() => setOpen(true)}>Show PopupC</button>
      <Popup animation="bounce" duration={500} open={open} onClose={onClose}>
        Hello
      </Popup>
      <InstallPopup />
    </div>
  )
}

export default App
