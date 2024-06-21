import { PopupProps } from '../type'

type PopupComponent = {
  show: (props?: Partial<PopupProps>) => void
  hide: () => void
}

type PopupManagerListener = (popups: { [key: string]: PopupComponent }) => void

class PopupManager {
  private popups: { [key: string]: PopupComponent } = {}
  private listeners: PopupManagerListener[] = []

  registerPopup(id: string, component: PopupComponent) {
    this.popups[id] = component
    this.notifyListeners()
  }

  unregisterPopup(id: string) {
    delete this.popups[id]
    this.notifyListeners()
  }

  showPopup(id: string, props?: Partial<PopupProps>) {
    const action = this.popups[id]
    if (action) {
      action.show(props)
    }
  }

  hidePopup(id: string) {
    if (this.popups[id]) {
      this.popups[id].hide()
      this.notifyListeners()
    }
  }

  addListener(listener: PopupManagerListener) {
    this.listeners.push(listener)
  }

  removeListener(listener: PopupManagerListener) {
    this.listeners = this.listeners.filter((l) => l !== listener)
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener(this.popups))
  }
}

const popupManager = new PopupManager()

export default popupManager
