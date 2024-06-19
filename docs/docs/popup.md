---
id: popup
title: Popup
sidebar_label: Popup
---

## Overview

The ` Popup` component is a higher-order React component designed to manage and display popup windows. It extends the `PopupContainer` component functionality by providing a container that handles rendering within a specified DOM element (defaulting to a `div` with the ID `popup-root`). This component offers additional customization for backdrops and integrates various popup properties for a seamless user experience.

## Props

### CommonOptions

| Property              | Type                                                                                                | Default | Description                                                                                |
| --------------------- | --------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------ |
| `open`                | `boolean`                                                                                           | `false` | Determines if the popup is open.                                                           |
| `onClose`             | `() => void`                                                                                        | N/A     | Callback function called when the popup is closed.                                         |
| `autoClose`           | `number \| false`                                                                                   | `false` | Time in milliseconds to automatically close the popup. If `false`, auto-close is disabled. |
| `closeOnOutsideClick` | `boolean`                                                                                           | `true`  | Determines if the popup should close when clicking outside of it.                          |
| `closeOnEscape`       | `boolean`                                                                                           | `true`  | Determines if the popup should close when pressing the escape key.                         |
| `closeButton`         | `boolean \| ((props: CloseButtonProps) => React.ReactNode) \| React.ReactElement<CloseButtonProps>` | `true`  | Configures the close button. Can be a boolean, a render function, or a React element.      |

### PopupProps

| Property         | Type              | Default | Description                                   |
| ---------------- | ----------------- | ------- | --------------------------------------------- |
| `children`       | `React.ReactNode` | N/A     | The content to be displayed inside the popup. |
| `popupId`        | `Id`              | N/A     | Optional ID for the popup element.            |
| `animation`      | `Animation`       | N/A     | Type of animation for the popup.              |
| `duration`       | `number`          | N/A     | Duration of the animation in milliseconds.    |
| `popupClassName` | `string`          | N/A     | Additional class names for the popup element. |

### PopupPropsExtended

| Property       | Type                         | Default | Description                                                |
| -------------- | ---------------------------- | ------- | ---------------------------------------------------------- |
| `onClickClose` | `(isClose: boolean) => void` | N/A     | Callback function called when the close button is clicked. |

## Usage Example

```jsx
import React, { useRef } from 'react';
import Popup from './Popup';

const ExampleComponent = () => {
  const popupRef = useRef(null);

  const openPopup = () => {
    if (popupRef.current) {
      popupRef.current.open();
    }
  };

  const closePopup = () => {
    if (popupRef.current) {
      popupRef.current.close();
    }
  };

  return (
    <div>
      <button onClick={openPopup}>Open Popup</button>
      <Popup
        ref={popupRef}
        open={false}
        animation="fade"
        duration={300}
        onClose={() => console.log('Popup closed')}
      >
        <div>Popup content goes here</div>
      </Popup>
    </div>
  );
};

export default ExampleComponent;

```

## Notes
- The Popup component relies on DefaultConfig.CSS_NAMESPACE for generating the class names for styling. Ensure that the appropriate CSS styles are defined in your stylesheet.
- The Transition component is used to handle animations. Customize the animation types and durations as needed.
- The component uses custom hooks useOutsideClick and useEscapeKey to handle closing the popup via outside clicks and escape key presses, respectively.
