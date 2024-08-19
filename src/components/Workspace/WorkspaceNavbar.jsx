import React from 'react'
import broadcast from '/workspace/broadcast-dark.svg'
import arrowDown from '/icons/arrow-down.svg'
import members from '/collaborators/members.svg'

const WorkspaceNavbar = () => {
  return (
    <nav className='flex items-center justify-between p-5 border-b'>
      <div className='flex items-center gap-2'>
        <img src={broadcast} alt="" />
        <h3 className='text-[#1F2937] font-semibold leading-[30px] text-[18px] flex items-center gap-2'>announcements <img src={arrowDown} alt="" /></h3>
      </div>
      <div className='flex items-center gap-3'>
        <img src={members} alt="" />
        <small className='text-[#6B7280] leading-6 font-medium'>9 members</small>
      </div>
    </nav>
  )
}

export default WorkspaceNavbar