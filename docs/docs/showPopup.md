---
id: showPopup
title: showPopup
sidebar_label: showPopup
---

The `showPopup` function is a utility for displaying a popup/modal in your application. It leverages the popupManager to manage the visibility and properties of popups.

## Import

```typescript
import { showPopup } from 'react-popupify'
```

## Syntax

```typescript
showPopup(popupId: string, options: ShowPopup): void
```

## Parameters

- `popupId`: string
  The unique identifier for the popup. This ID is used to register and manage the popup within the popupManager.
- `options`: ShowPopup
  An object containing various properties to customize the behavior and appearance of the popup. This object extends PopupProps and includes:

### Options

| Property              | Type                                                                                                | Default | Description                                                                                |
| --------------------- | --------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------ |
| `open`                | `boolean`                                                                                           | `false` | Determines if the popup is open.                                                           |
| `onClose`             | `() => void`                                                                                        | N/A     | Callback function called when the popup is closed.                                         |
| `autoClose`           | `number \| false`                                                                                   | `false` | Time in milliseconds to automatically close the popup. If `false`, auto-close is disabled. |
| `closeOnOutsideClick` | `boolean`                                                                                           | `true`  | Determines if the popup should close when clicking outside of it.                          |
| `closeOnEscape`       | `boolean`                                                                                           | `true`  | Determines if the popup should close when pressing the escape key.                         |
| `closeButton`         | `boolean \| ((props: CloseButtonProps) => React.ReactNode) \| React.ReactElement<CloseButtonProps>` | `true`  | Configures the close button. Can be a boolean, a render function, or a React element.      |
| animation             | `bounce`, `flip`, `zoom`, `fade`                                                                    | `fade`  | Animation type for the popup. Default is 'fade'.                                           |
| `duration`            | `number`                                                                                            | 300     | Duration of the animation in milliseconds. Default is `300`.                               |
| `popupClassName`      | `string`                                                                                            | N/A     | Additional class names for the popup element.                                              |
| `backdropClassName`   | `string`                                                                                            | N/A     | Additional class name for the backdrop.                                                    |

### Returns

- void

## Usage Example

```jsx
import { showPopup } from 'react-popupify'
import CustomPopup from './components/CustomPopup'

const App = () => {
  const handleShowPopup = () => {
    showPopup('examplePopupId', {
      open: 'true' // To emmit popup set open option to be true
      animation: 'bounce',
      duration: 500,
      autoClose: 3000,
      closeButton: true,
    })
  }
  return (
    <div>
      <button onClick={handleShowPopup}>Show Popup</button>
      <CustomPopup />
    </div>
  )
}

export default App
```

## Notes

- Ensure that the `popupId` provided matches the ID used when registering the popup component.
- The `showPopup` function utilizes the `popupManager` to manage the lifecycle and properties of the `popup`. Ensure popupManager is properly set up in your project.
