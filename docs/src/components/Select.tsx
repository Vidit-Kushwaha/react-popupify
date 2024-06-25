import React from 'react'

type SelectProps = {
  title: string
  options: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
}

const Select: React.FC<SelectProps> = ({ title, options, value, onChange }) => {
  return (
    <div className="flex space-x-2 items-center">
      <span className="text-md">{title}</span>
      <select
        id="select"
        className="text-gray-500 text-md rounded-lg focus:ring-black focus:border-black block p-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
