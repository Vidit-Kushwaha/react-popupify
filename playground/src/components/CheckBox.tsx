import React from 'react'

type CheckBoxProps = {
  text: string
  id: string
  checked: boolean
  onChange: (checked: boolean) => void
}

const CheckBox: React.FC<CheckBoxProps> = ({ text, id, checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2 w-fit">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-3 h-3 text-black bg-gray-100 border-gray-300 rounded focus:ring-black focus:ring-2 "
      />
      <span className="text-md">{text}</span>
    </label>
  )
}

export default CheckBox
