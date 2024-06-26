---
id: installation
title: Installation
sidebar_label: Installation
---

## Requirements

- [React](https://reactjs.org) version such that ReactDOM.createPortal is available

## With npm:

```sh
  npm i react-popupify
```

## Css:

```html
import "react-popupify/dist/bundle.css";
```

## Usage Example

### Using Popup

```jsx
import React, { useState } from 'react'
import { PopupContainer } from 'react-popupify'
import 'react-popupify/dist/bundle.css'

const ExampleComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    console.log('onClose')
    setIsOpen(false)
  }

  return (
    <div>
      <button className="w-full mx-auto" onClick={() => setIsOpen(!isOpen)}>
        Open Popup
      </button>
      <Popup
        animation="bounce"
        open={isOpen}
        closeOnEscape={true}
        closeOnOutsideClick={true}
        closeButton={true}
        onClose={onClose}
      >
        Say Hello to React-Poupify !!
      </Popup>
    </div>
  )
}

export default ExampleComponent
```

### Using showPopup

```jsx
import React from 'react'

import { showPopup } from 'react-popupify'
import 'react-popupify/dist/bundle.css'
import CustomPopup from './component/CustomPopup'

const App = () => {
  const popup = () => showPopup('customPopupId', { open: true })

  return (
    <div>
      <button onClick={popup}>Show Popup!</button>
      <CustomPopup />
    </div>
  )
}

export default App
```

./component/CustomPopup.tsx

```jsx
import React from 'react'
import { Popup } from 'react-popupify'

const CustomPopup = () => {
  return (
    <Popup
      popupId="customPopupId"
      animation="bounce"
      open={false}
      closeOnEscape={true}
      closeOnOutsideClick={true}
      closeButton={true}
    >
      Say Hello to React-Poupify !!
    </Popup>
  )
}

export default CustomPopup
```
