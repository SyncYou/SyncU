import React from 'react'
import { IconType } from 'react-icons'

interface Props{
    icon?: IconType,
    label?: string,
    onClick?: () => void,
}

const ControlledButton: React.FC<Props> = ({icon: Icon, label, onClick}) => {
  return (
    <button
    onClick={onClick}
    disabled={true}
    className="text-[#ffffff] w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full text-center leading-6 font-medium bg-secondary disabled:border disabled:border-[#E6E6F0] disabled:bg-[#F5F5FA] disabled:text-gray"
  >
      {Icon && <Icon/>}
   {label}
  </button>
  )
}

export default ControlledButton