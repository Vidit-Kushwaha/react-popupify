# React-Popupify


![NPM Version](https://img.shields.io/npm/v/react-popupify?style=for-the-badge)
![NPM Downloads](https://img.shields.io/npm/dw/react-popupify?style=for-the-badge)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-popupify?style=for-the-badge)
![GitHub License](https://img.shields.io/github/license/Vidit-Kushwaha/react-popupify?style=for-the-badge)

<img src="https://i.ibb.co/m6t3dQc/download-1.gif" alt="GIF" height="650">

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Release Notes](#release-notes)
- [License](#license)

## Features 

- **Easy Integration**: Simple and intuitive API for quick integration.
- **Custom Animations**: Supports various animation types such as `bounce`, `flip`, `zoom`, and `fade`.
- **Auto-Close**: Option to auto-close the popup after a specified duration.
- **Customizable Close Button**: Flexible options for close button customization.
- **Event Handlers**: Callbacks for when the popup is entered and exited.
- **Esc Key and Outside Click**: Configurable options to close the popup using the escape key or clicking outside.

## Installation

With npm
```
npm install --save react-popupify
```

Adding css
```html
import "react-popupify/dist/bundle.css";
```

### The Gist

```jsx

  import React from 'react';

  import { showPopup } from 'react-popupify'
  import "react-popupify/dist/bundle.css";
  
  const App = () => {

  const popup = () => showPopup('customPopupId', { open: true })

    return (
      <div>
        <button onClick={popup}>Show Popup!</button>
        <CustomPopup />
      </div>
    );
  }

export default App
```

./component/CustomPopup.tsx
```jsx
  import React from 'react';
  import { Popup } from 'react-popupify';

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
    );
  }

export default CustomPopup
```

## Documentation

Check the [documentation](https://docs-react-popupify.onrender.com/) to get you started!

## Contributing

We welcome contributions! Whether you're a seasoned developer or a curious enthusiast, there are ways to get involved:

-   **Bug fixes and improvements:** Find any issues? Submit a pull request!
-   **New features:** Have an idea for a cool feature? Let's discuss it in an issue!
-   **Documentation:** Improve the project's documentation and website.
-   **Spread the word:** Share the project with your network and help it grow!

You can see contribution guidelines [here](https://github.com/Vidit-Kushwaha/react-popupify/blob/main/CONTRIBUTING.md)

## Release Notes

You can find the release note for the latest release [here](https://github.com/Vidit-Kushwaha/react-popupify/releases/latest)

You can browse them all [here](https://github.com/Vidit-Kushwaha/react-popupify/releases)

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Vidit-Kushwaha/react-popupify/blob/main/LICENSE) file for details.
