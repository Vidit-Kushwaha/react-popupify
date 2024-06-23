import React from 'react';

type SelectProps = {
  title: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
};

const Select: React.FC<SelectProps> = ({ title, options, value, onChange }) => {
  return (
    <form className="flex space-x-2 items-center">
      <span className="text-md">{title}</span>
      <select
        id="select"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-fit p-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Select;
