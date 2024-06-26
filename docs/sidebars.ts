import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  
  tutorialSidebar: {
    ["Getting Started"]: [
      "introduction",
      "installation",
    ],
    ["API Reference"]: [
      "popup",
      "popupContainer",
      "closeButton",
      "transition",
      "showPopup",
    ],

  }

};

export default sidebars;
