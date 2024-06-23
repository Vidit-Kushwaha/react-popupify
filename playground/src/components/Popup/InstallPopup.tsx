import Popup from '../../../../src/components/Popup'

const InstallPopup = () => {
  const onClose = () => {
    console.log('onClose')
  }

  const handleCopy = () => {
    navigator.clipboard.writeText('npm i react-popupify').then(() => {
      alert('Code copied to clipboard!')
    })
  }
  return (
    <Popup
      popupId="installPopup"
      animation="flip"
      duration={9000}
      closeOnEscape={true}
      closeOnOutsideClick={true}
      closeButton={true}
      onClose={onClose}
      open={false}
      backdropClassName="bg-opacity-50"
      popupClassName="bg-white rounded-lg shadow-xl p-4 !mx-10 z-50"
    >
      <div className="h-15 w-15">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 10.555h28v9.335H16v1.556H9.778v-1.557H2Zm1.556 7.779h3.111v-4.668h1.555v4.667h1.556v-6.222H3.556Zm7.778-6.223v7.779h3.111v-1.556h3.111v-6.223Zm3.111 1.556H16v3.112h-1.556Zm4.667-1.556v6.223h3.111v-4.668h1.556v4.667h1.556v-4.667h1.556v4.667h1.556v-6.222Z"
            style={{ fill: '#cb3837' }}
          />
        </svg>
      </div>
      <button
        onClick={handleCopy}
        aria-label="Copy code to clipboard"
        title="Copy code to clipboard"
        className="flex justify-center space-x-2"
      >
        <p className="text-black">npm i react-popupify</p>
        <svg
          width="800"
          height="800"
          viewBox="0 0 24 24"
          className="fill-black h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 2h11v2H6v13H4zm4 4h12v16H8zm2 2v12h8V8z" fill="#000" />
        </svg>
      </button>
    </Popup>
  )
}

export default InstallPopup
