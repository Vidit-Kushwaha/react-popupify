---
id: installation
title: Installation
sidebar_label: Installation
---

## Requirements

- [React](https://reactjs.org) version >= 18 or above 

## With npm:

```sh
  npm i react-popupify
```

## Css:

```html
import "react-popupify/dist/bundle.css";
```

## Usage Example

```jsx
import React, { useState } from 'react'
import { PopupContainer } from 'react-popupify'
import "react-popupify/dist/bundle.css";

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
      <PopupContainer
        animation="bounce"
        open={isOpen}
        closeOnEscape={true}
        closeOnOutsideClick={true}
        closeButton={true}
        onClose={onClose}
      >
        Say Hello to React-Poupify !!
      </PopupContainer>
    </div>
  )
}

export default ExampleComponent
```
