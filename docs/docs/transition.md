---
id: transition
title: Transition
sidebar_label: Transition
---

## Overview

The Transition component is a React component that handles animations for its children elements. It supports different types of animations and allows customization of the duration. The component ensures that the appropriate animations are triggered when the component enters or exits the DOM.

## Types

### Animation

```typescript
export type Animation = 'bounce' | 'flip' | 'zoom' | 'fade'
```

Defines the Type of animations that can be applied.

### TransitionProps

Defines the properties that can be passed to the Transition component.

|  Property   |               Type                | Default | Description                                                                                         |
| :---------: | :-------------------------------: | ------: | --------------------------------------------------------------------------------------------------- |
| `animation` |            `Animation`            |     N/A | The type of animation to be applied. Must be one of `bounce`, `flip`, `zoom`, or `fade`.            |
| `duration`  |             `number`              |     300 | The duration of the animation in milliseconds.                                                      |
| `children`  |         `React.ReactNode`         |     N/A | The child elements that will be wrapped by the Transition component and subjected to the animation. |
|    `in`     |             `boolean`             |     N/A | A flag to determine if the component should be in the "entered" state.                              |
| `onEntered` |           `() => void`            |     N/A | A callback function that is called when the enter animation has completed.                          |
| `onExited`  |           `() => void`            |     N/A | A callback function that is called when the exit animation has completed.                           |
|  `nodeRef`  | `React.RefObject<HTMLDivElement>` |     N/A | Ref to child component                                                                              |

## Usage Example

```jsx
import React, { useState } from 'react'
import Transition from './Transition'

const ExampleComponent = () => {
  const [inProp, setInProp] = useState(false)

  return (
    <div>
      <button onClick={() => setInProp(!inProp)}>Toggle</button>
      <Transition
        animation="bounce"
        in={inProp}
        duration={500}
        onEntered={() => console.log('Enter animation completed')}
        onExited={() => console.log('Exit animation completed')}
      >
        <div>Content to be animated</div>
      </Transition>
    </div>
  )
}

export default ExampleComponent
```

## Notes

- The component relies on DefaultConfig.CSS_NAMESPACE for generating the class names for animations. Ensure that the appropriate CSS classes are defined in your stylesheets.
- The useLayoutEffect and useEffect hooks are used to handle the animations for entering and exiting the DOM respectively.
