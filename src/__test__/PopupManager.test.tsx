import React from 'react'
import { render } from '@testing-library/react'
import popupManager from '../utils/popupManager'
import { Popup } from '../components'

describe('PopupManager', () => {
  const onClose = jest.fn()
  const popupId = 'test-popup'

  it('should not close popup if not exists', () => {
    render(
      <Popup
        popupId="test-popup"
        animation="fade"
        duration={5}
        open={false}
        onClose={onClose}
      >
        <div>Popup Content</div>
      </Popup>
    )

    popupManager.showPopup('not-exists-popup')

    expect(document.getElementById(popupId))
    expect(onClose).toHaveBeenCalledTimes(0)
  })
})
