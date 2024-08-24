import React from 'react'
import addIcon from '/workspace/add_icon.svg'
import sendIcon from '/workspace/send_icon.svg'

const TypeMessage = () => {
  return (
    <div className='bg-[#F9FAFB] p-2 w-full border border-[#E5E7EB] rounded flex items-center justify-between gap-2'>
        <img src={addIcon} alt="" />
        <input className='flex-1 bg-transparent focus:outline-none' placeholder='Send a message...' type="text" />
        <img src={sendIcon} alt="" />
    </div>
  )
}

export default TypeMessage