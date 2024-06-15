---
id: popupContainer
title: PopupContainer
sidebar_label: PopupContainer
---

## Overview

The `PopupContainer` component is a higher-order React component designed to manage and display popup windows. It extends the `Popup` component functionality by providing a container that handles rendering within a specified DOM element (defaulting to a `div` with the ID `popup-root`). This component offers additional customization for backdrops and integrates various popup properties for a seamless user experience.

## Props

### PopupContainerProps

| Property              | Type                                                                                                | Default  | Description                                                                                |
| --------------------- | --------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------ |
| `children`            | `React.ReactNode`                                                                                   | N/A      | The content to be displayed inside the popup.                                              |
| `backdropClassName`   | `string`                                                                                            | N/A      | Additional class names for the backdrop element.                                           |
| `open`                | `boolean`                                                                                           | `false`  | Determines if the popup is open.                                                           |
| `onClose`             | `() => void`                                                                                        | N/A      | Callback function called when the popup is closed.                                         |
| `autoClose`           | `number \| false`                                                                                   | `false`  | Time in milliseconds to automatically close the popup. If `false`, auto-close is disabled. |
| `closeOnOutsideClick` | `boolean`                                                                                           | `true`   | Determines if the popup should close when clicking outside of it.                          |
| `closeOnEscape`       | `boolean`                                                                                           | `true`   | Determines if the popup should close when pressing the escape key.                         |
| `closeButton`         | `boolean \| ((props: CloseButtonProps) => React.ReactNode) \| React.ReactElement<CloseButtonProps>` | `true`   | Configures the close button. Can be a boolean, a render function, or a React element.      |
| `popupId`             | `Id`                                                                                                | N/A      | Optional ID for the popup element.                                                         |
| `animation`           | `Animation`                                                                                         | `'fade'` | Type of animation for the popup.                                                           |
| `duration`            | `number`                                                                                            | `300`    | Duration of the animation in milliseconds.                                                 |
| `popupClassName`      | `string`                                                                                            | N/A      | Additional class names for the popup element.                                              |

### Default Props

The `PopupContainer` component merges these default properties with the user-provided props:

```typescript
const defaultProps: defualtProps = {
  autoClose: false,
  closeOnOutsideClick: true,
  closeOnEscape: true,
  animation: 'fade',
  duration: 300,
  closeButton: true,
}
```

## Usage Example

```jsx
import React, { useRef } from 'react'
import PopupContainer from './PopupContainer'

const ExampleComponent = () => {
  const popupContainerRef = useRef(null)

  const openPopup = () => {
    if (popupContainerRef.current) {
      popupContainerRef.current.open()
    }
  }

  const closePopup = () => {
    if (popupContainerRef.current) {
      popupContainerRef.current.close()
    }
  }

  return (
    <div>
      <button onClick={openPopup}>Open Popup</button>
      <PopupContainer
        ref={popupContainerRef}
        open={false}
        animation="fade"
        duration={300}
        onClose={() => console.log('Popup closed')}
      >
        <div>Popup content goes here</div>
      </PopupContainer>
    </div>
  )
}

export default ExampleComponent
```

## Notes

- The PopupContainer component relies on DefaultConfig.CSS_NAMESPACE for generating the class names for styling. Ensure that the appropriate CSS styles are defined in your stylesheet.
- The PopupContainer uses the Popup component to manage the popup content and animations. Customize the animation types and durations as needed.
- The component handles rendering into a DOM element with the ID popup-root. If this element does not exist, it will be created automatically.
- The useOutsideClick and useEscapeKey hooks are used to handle closing the popup via outside clicks and escape key presses, respectively.
