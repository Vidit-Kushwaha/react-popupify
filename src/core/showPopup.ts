import { ShowPopup } from '../type'
import popupManager from '../utils/popupManager'

const showPopup = (id: string, props: ShowPopup) => {
  popupManager.showPopup(id, props)
}

export { showPopup }
