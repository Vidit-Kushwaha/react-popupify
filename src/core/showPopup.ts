import { ShowPopup } from '../type'
import popupManager from '../utils/popupManager'

/**
 * Displays a popup with the specified ID and properties.
 * @param id - The ID of the popup to display.
 * @param props - Additional properties to apply to the popup.
 */
const showPopup = (id: string, props: ShowPopup) => {
  popupManager.showPopup(id, props)
}

export { showPopup }
