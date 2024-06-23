import React from 'react';

interface InputProps {
    type: string;
    placeholder: string;
    title: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }


const Input: React.FC<InputProps> = ({
    placeholder = '',
    type = 'text',
    title,
    value = '',
    onChange,
  }) => {
    return (
      <div className='flex space-x-2 items-center'>
        <span className="text-md">{title}</span>
        <input
          type={type}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block p-2"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };
  
  export default Input;
  