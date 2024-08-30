import React from 'react'
import broadcast from '/workspace/broadcast-dark.svg'
import arrowDown from '/icons/arrow-down.svg'
import add from '/workspace/add-icon.svg'
import vergil from '/collaborators/vergil.svg'
import { useAppContext } from '../../lib/Contexts/AppContext'

const WorkspaceNavbar = () => {
  const {setShowModal } = useAppContext()
  const handleOpenModal = () => {
      setShowModal(true)
  }
  return (
    <nav className='flex items-center justify-between p-5 border-b'>
      <div className='flex items-center gap-2'>
        <img src={broadcast} alt="" />
        <h3 className='text-[#1F2937] font-semibold leading-[30px] text-[18px] flex items-center gap-2'>announcements <img src={arrowDown} alt="" /></h3>
      </div>
      <div className='flex items-center gap-3'>
        <img onClick={handleOpenModal} className='cursor-pointer' src={add} alt="" />
        <img src={vergil} alt="" />
        <small className='text-[#6B7280] leading-6 font-medium'>1 members</small>
      </div>
    </nav>
  )
}

export default WorkspaceNavbar