import React, { useRef, useState } from 'react'

interface Props {
    type: 'email' | 'text';
    label: string;
    placeholder: string;
  
}


const ControlledInput: React.FC<Props> = ({type, label, placeholder}) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div
    onClick={() => inputRef.current?.focus()}
    className={`border rounded-xl py-2 px-3 flex flex-col gap-2 ${isFocused ? 'border-[#A771E5] shadow-lg shadow-[#EDE4FA]' : 'border-[#E6E6F0]'}`}
  >
    <label
      className="text-secondary leading-6 text-[16px] font-normal"
      htmlFor="email"
    >
      {label}
    </label>
    <input
      className="focus:outline-none"
      name="email"
      type={type}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    //   placeholder="Enter your email..."
    placeholder={placeholder}
    />
  </div>
  )
}

export default ControlledInput