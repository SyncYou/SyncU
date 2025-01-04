import React from 'react'
import check from '/signUp-imgs/check.svg'
import { MdClose } from 'react-icons/md'

const ToastNotifications: React.FC = () => {
  return (
    <div className='w-[358px] md:w-[452px] h-[90px] rounded-lg bg-white p-5 my-3 mx-auto border border-[#E4E4E4] shadow shadow-[#0000001A] flex items-center gap-5'>
        <img src={check} alt="check" />
        <div className='flex-1 flex flex-col items-start gap-1'>
            <h2 className='text-nowrap font-semibold text-gray-950 leading-5 text-[14px]'>Email verification successful</h2>
        <p className='font-normal leading-4 text-[12px] text-nowrap text-gray-700'>Your email has been successfully verified.</p>
        </div>
            {/* <button className='text-[#73737F] text-[20px]'>X</button> */}
            <MdClose size={25} color='#73737F'/>
    </div>
  )
}

export default ToastNotifications