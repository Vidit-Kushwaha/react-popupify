---
id: popupContainer
title: PopupContainer
sidebar_label: PopupContainer
---

## Overview

The `PopupContainer` component is a versatile React component designed to display popup windows with customizable options for animations, auto-close behavior, and various close mechanisms. It supports nested children and can be controlled programmatically via a ref.

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


## Notes

- The PopupContainer component relies on DefaultConfig.CSS_NAMESPACE for generating the class names for styling. Ensure that the appropriate CSS styles are defined in your stylesheet.
- The PopupContainer uses the Popup component to manage the popup content and animations. Customize the animation types and durations as needed.
- The component handles rendering into a DOM element with the ID popup-root. If this element does not exist, it will be created automatically.
- The useOutsideClick and useEscapeKey hooks are used to handle closing the popup via outside clicks and escape key presses, respectively.
