import popupManager from "../utils/popupManager";

const popup = () => {
    const showPopup = (id: string) => {
      console.log(`usePopup - showPopup: ${id}`);
      popupManager.showPopup(id);
    };
  
    const hidePopup = (id: string) => {
      console.log(`usePopup - hidePopup: ${id}`);
      popupManager.hidePopup(id);
    };
  
    return { showPopup, hidePopup };
  };

export default popup;
