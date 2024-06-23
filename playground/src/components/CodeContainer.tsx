import React, { useEffect, useState } from 'react'
import { PopupProps } from '../../../src'

type CodeContainerProps = {
  options: Partial<PopupProps>
}

const CodeContainer: React.FC<CodeContainerProps> = ({ options }) => {
  const handleCopy = () => {
    const code = `
        showPopup('exampleID', {
            animation: ${options.animation},
            duration: ${options.duration},
            autoClose: ${options.autoClose},
            closeButton: ${options.closeButton},
            closeOnEscape: ${options.closeOnEscape},
            closeOnOutsideClick: ${options.closeOnOutsideClick},
        });
        `
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard!')
    })
  }

  const [highlightedCode, setHighlightedCode] = useState('')

  useEffect(() => {
    const code = `
showPopup('exampleID', {
  animation: '${options.animation}',
  duration: ${options.duration},
  autoClose: ${options.autoClose},
  closeButton: ${options.closeButton},
  closeOnEscape: ${options.closeOnEscape},
  closeOnOutsideClick: ${options.closeOnOutsideClick},
});
    `

    const highlighted = code
      .replace(
        /(showPopup|animation|duration|autoClose|closeButton|closeOnEscape|closeOnOutsideClick)/g,
        '<span class="code-keyword">$1</span>'
      )
      .replace(/'([^']+)'/g, '<span class="code-string">\'$1\'</span>')
      .replace(/\b(\d+)\b/g, '<span class="code-number">$1</span>')
      .replace(/[{}(),;]/g, '<span class="code-punctuation">$&</span>')

    setHighlightedCode(highlighted)
  }, [options])

  return (
    <>
      <div className="text-2xl font-bold my-5">Popup Emmiter</div>
        <pre className='relative py-1 px-4 rounded w-fit'>
        <button
          className="absolute top-2 right-2 fill-gray-200"
          onClick={handleCopy}
          aria-label='Copy code to clipboard'
          title='Copy code to clipboard'
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="fill-gray-200 h-5 w-5"
          >
            <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" />
          </svg>
        </button>
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
    </>
  )
}

export default CodeContainer
