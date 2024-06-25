import React, { useState } from 'react'
import 'react-popupify/dist/bundle.css'
import '../css/App.css'

import { PopupProps, showPopup } from 'react-popupify'
import InstallPopup from './Popup/InstallPopup'
import CheckBox from './CheckBox'
import Input from './Input'
import Select from './Select'
import CodeContainer from './CodeContainer'
import Copied from './Popup/Copied'

const defaultOptions: Partial<PopupProps> = {
  open: false,
  autoClose: false,
  closeOnOutsideClick: true,
  closeOnEscape: true,
  animation: 'fade',
  duration: 300,
  closeButton: true,
}

const selectOptions = [
  { value: 'fade', label: 'Fade' },
  { value: 'flip', label: 'Flip' },
  { value: 'zoom', label: 'Zoom' },
  { value: 'bounce', label: 'Bounce' },
]

const App: React.FC = () => {
  const [options, setOptions] = useState<Partial<PopupProps>>(defaultOptions)

  const handleShowPopup = () => {
    showPopup('installPopup', {
      ...options,
      open: true,
    })
  }

  const handelReset = () => {
    setOptions(defaultOptions)
  }

  const handleOptionChange = (
    option: keyof PopupProps,
    value: boolean | number | string
  ) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [option]: value,
    }))
  }

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleOptionChange('duration', parseInt(e.target.value, 10))
  }

  const handleAutoCloseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? false : parseInt(e.target.value, 10)
    handleOptionChange('autoClose', value)
  }

  const handleAnimationChange = (value: string) => {
    handleOptionChange('animation', value)
  }

  return (
    <div className="container my-10">
      <CodeContainer options={options} />
      <div className="w-fit">
        <h2 className="text-2xl font-bold mt-5">Options</h2>
        <div className="space-y-2 md:space-y-0 md:flex md:space-x-4 my-5 w-fit">
          <Select
            title="Animation"
            options={selectOptions}
            value={options.animation ?? 'fade'}
            onChange={handleAnimationChange}
          />
          <Input
            type="number"
            placeholder="300"
            title="Duration"
            value={options.duration ?? 300}
            onChange={handleDurationChange}
          />
          <Input
            type="number"
            placeholder="Auto Close (ms)"
            title="Auto Close (ms)"
            value={
              typeof options.autoClose === 'number' ? options.autoClose : ''
            }
            onChange={handleAutoCloseChange}
          />
        </div>
        <div className="space-y-2 flex flex-col my-5">
          <CheckBox
            id="closeButton"
            text="Close Button"
            checked={options.closeButton ?? false}
            onChange={(checked) => handleOptionChange('closeButton', checked)}
          />
          <CheckBox
            id="closeOnEscape"
            text="Close on Escape"
            checked={options.closeOnEscape ?? false}
            onChange={(checked) => handleOptionChange('closeOnEscape', checked)}
          />
          <CheckBox
            id="closeOnOutsideClick"
            text="Close on Outside Click"
            checked={options.closeOnOutsideClick ?? false}
            onChange={(checked) =>
              handleOptionChange('closeOnOutsideClick', checked)
            }
          />
        </div>
        <div className="space-x-2">
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={handleShowPopup}
          >
            Show Popup
          </button>
          <button
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={handelReset}
          >
            Reset
          </button>
        </div>
      </div>
      <InstallPopup />
      <Copied />
    </div>
  )
}

export default App
