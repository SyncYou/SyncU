import React from 'react'

interface Props {
    icon?: string;
    label?: string;
    onClick?: () => void;
}

const SocialButton: React.FC<Props> = ({icon, label, onClick}) => {
  return (
    <div onClick={onClick} className="flex items-center gap-5 justify-center border border-light rounded-full p-4 md:p-3 cursor-pointer">
    <img src={icon} alt="google" />
    <p className="text-secondary font-medium text-[18px] leading-6 text-center">
     {label}
    </p>
  </div>
  )
}

export default SocialButton