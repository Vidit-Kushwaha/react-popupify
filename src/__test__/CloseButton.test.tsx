import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import CloseButton from '../components/CloseButton'

describe('CloseButton', () => {
  it('renders a button', () => {
    render(<CloseButton closePopup={jest.fn()} />)

    expect(screen.getByRole('button'))
  })

  it('calls closeButton when clicked', async () => {
    const closeButton = jest.fn()
    render(<CloseButton closePopup={closeButton} />)

    expect(closeButton).not.toHaveBeenCalled()

    fireEvent.click(screen.getByRole('button'))
    expect(closeButton).toHaveBeenCalled()
  })

  it('has a default aria-label', () => {
    render(<CloseButton closePopup={jest.fn()} />)

    expect(screen.getByLabelText('Close'))
  })

  it('sets aria-label', () => {
    render(<CloseButton closePopup={jest.fn()} ariaLabel="foobar" />)

    expect(screen.getByLabelText('foobar'))
  })
})
