import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Popup from '../components/Popup'

describe('Popup Component', () => {
  const onClose = jest.fn()

  beforeEach(() => {
    onClose.mockClear()
  })

  it('renders correctly when opened', () => {
    render(
      <Popup
        popupId="test-popup"
        animation="fade"
        duration={5}
        open={true}
        onClose={onClose}
      >
        <div>Popup Content</div>
      </Popup>
    )

    expect(screen.getByText('Popup Content'))
  })

  it('closeButton: true & Clicked', () => {
    render(
      <Popup
        popupId="test-popup"
        animation="fade"
        duration={5}
        open={true}
        onClose={onClose}
        closeButton={true}
      >
        <div>Popup Content</div>
      </Popup>
    )

    fireEvent.click(screen.getByRole('button', { name: /close/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closeButton: false & closeButton not render', () => {
    render(
      <Popup
        popupId="test-popup"
        animation="fade"
        duration={5}
        open={true}
        onClose={onClose}
        closeButton={false}
      >
        <div>Popup Content</div>
      </Popup>
    )

    expect(screen.queryByRole('button', { name: /close/i })).toBeNull()
  })

  it('closeOnEscape: true', () => {
    render(
      <Popup
        popupId="test-popup"
        animation="fade"
        duration={5}
        open={true}
        onClose={onClose}
        closeButton={true}
      >
        <div>Popup Content</div>
      </Popup>
    )

    fireEvent.keyDown(screen.getByTestId('test-popup'), { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closeOnEscape: false', () => {
    render(
      <Popup
        popupId="test-popup"
        animation="fade"
        duration={5}
        open={true}
        onClose={onClose}
        closeButton={true}
        closeOnEscape={false}
      >
        <div>Popup Content</div>
      </Popup>
    )

    fireEvent.keyDown(screen.getByTestId('test-popup'), { key: 'Escape' })
    expect(onClose).not.toHaveBeenCalledTimes(1)
  })

  it('closeOnOutsideClick: true', () => {
    render(
      <Popup
        popupId="test-popup"
        animation="fade"
        duration={5}
        open={true}
        onClose={onClose}
        closeButton={true}
      >
        <div>Popup Content</div>
      </Popup>
    )

    fireEvent.mouseDown(document.body)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closeOnOutsideClick: false', () => {
    render(
      <Popup
        popupId="test-popup"
        animation="fade"
        duration={5}
        open={true}
        onClose={onClose}
        closeButton={true}
        closeOnOutsideClick={false}
      >
        <div>Popup Content</div>
      </Popup>
    )

    fireEvent.mouseDown(document.body)
    expect(onClose).not.toHaveBeenCalledTimes(1)
  })
})
