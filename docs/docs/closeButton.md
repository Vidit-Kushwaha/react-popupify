---
id: closeButton
title: CloseButton
sidebar_label: CloseButton
---

## Overview

The `CloseButton` component is a React functional component that renders a button typically used to close a popup or modal. It includes an SVG icon and allows customization of the ARIA label for accessibility.

## Props

### CloseButtonProps

| Property    | Type                                             | Default | Description                                                      |
|-------------|--------------------------------------------------|---------|------------------------------------------------------------------|
| `ariaLabel` | `string`                                         | 'Close' | The ARIA label for the button, providing an accessible name.     |
| `closePopup`| `(e: React.MouseEvent<HTMLButtonElement>) => void` | N/A     | The function to be called when the button is clicked.            |

## Usage Example

```jsx
import React from 'react';
import CloseButton from './CloseButton';

const ExampleComponent = () => {
  const handleClose = (e) => {
    console.log('Close button clicked', e);
    // Your close logic here
  };

  return (
    <div>
      <CloseButton closePopup={handleClose} />
    </div>
  );
};

export default ExampleComponent;
```

## Notes
- The CloseButton component relies on DefaultConfig.CSS_NAMESPACE for generating the class name for styling. Ensure that the appropriate CSS styles are defined in your stylesheet.
- The SVG icon used in the button is hardcoded in the component. You can replace it with any other icon as needed.
- The stopPropagation method is called on the click event to prevent the event from bubbling up to parent elements, which might have their own click handlers.