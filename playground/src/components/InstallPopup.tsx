import Popup from '../../../src/components/Popup'

const InstallPopup = () => {
  const onClose = () => {
    console.log('onClose')
  }
  return (
    <Popup
      animation="flip"
      duration={9000}
      closeOnEscape={true}
      closeOnOutsideClick={true}
      closeButton={true}
      onClose={onClose}
      open= {false}
      // autoClose={400}
      backdropClassName="bg-opacity-50 fixed inset-0"
      popupClassName="bg-white rounded-lg shadow-xl z-10 p-4 !mx-10"
      popupId="examplePopupId"
    >
      <div className="h-15 w-15">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 10.555h28v9.335H16v1.556H9.778v-1.557H2Zm1.556 7.779h3.111v-4.668h1.555v4.667h1.556v-6.222H3.556Zm7.778-6.223v7.779h3.111v-1.556h3.111v-6.223Zm3.111 1.556H16v3.112h-1.556Zm4.667-1.556v6.223h3.111v-4.668h1.556v4.667h1.556v-4.667h1.556v4.667h1.556v-6.222Z"
            style={{ fill: '#cb3837' }}
          />
        </svg>
      </div>
      <p className="text-black">npm i react-popupify</p>
    </Popup>
  )
}

export default InstallPopup
