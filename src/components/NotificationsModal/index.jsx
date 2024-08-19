import React from 'react'
import cancel from '/icons/cancel-dark.svg'
import mark from '/icons/tick-double.svg'
import folder from '/icons/folder.svg'
import vergil from '/collaborators/vergil.svg'
import pop from '/icons/pop.svg'

const NotificationsModal = ({handleHideNotifications}) => {
  return (
    <div className='bg-white border border-[#D1D5DB] rounded-xl py-2 w-full'>
        <div className='flex items-center justify-between p-2'>
            <h2 className='text-[#1F2937] text-[24px] font-bold leading-[28.8px]'>Notifications</h2>
            <img onClick={handleHideNotifications} className='cursor-pointer' src={cancel} alt="cancel" />
        </div>
        <div className='flex items-center justify-between p-2 border-b border-[#E5E7EB]'>
            <div className='flex flex-1 items-center gap-3'>
                <h3 className='text-[#1F2937] flex items-center gap-1 leading-6 font-semibold capitalize p-2 border-b-2 border-[#8E3FDE] cursor-pointer'>All <span className='border border-[#E5E7EB] rounded-full py-1 px-2 text-[#374151] text-[10px] leading-[15px] font-semibold'>1</span></h3>
                <h3 className='text-[#9CA3AF] leading-6 font-medium p-2 capitalize cursor-pointer'>teams</h3>
            </div>
            <div>
                <small className='flex items-center gap-2 text-[#8E3FDE] text-[14px] font-semibold leading-[21px] cursor-pointer'>
                <img src={mark} alt="" />
                Mark all as read
                </small>
                </div>
        </div>
        <div className='py-2'>
            <h3 className='text-[#6B7280] leading-6 font-medium py-1 px-3'>This month</h3>
            <div className='flex items-center gap-2 bg-[#FAF6FE] p-1'>
                <div className='relative bg-[#F97316] p-2 rounded-full'>
                    <img src={folder} alt="" />
                    <img className='absolute -bottom-2 -right-2' src={vergil} alt="" />
                </div>
                <div className='flex-1 p-2'>
                    <div className='flex items-center justify-between'>
                    <p className='text-[#6B7280] flex-1 leading-6 px-1'><span className='text-[#1F2937] font-semibold'>You </span>requested to join project<span className='text-[#1F2937] font-semibold'> Syncu</span></p>
                        <img src={pop} alt="" />
                    </div>
                    <small className='text-[#6B7280] leading-5 text-[14px] px-1'>2 mins ago</small>
                </div>
            </div>
            <div>
                <p className='text-[#6B7280] text-center leading-[21px] text-[14px] pt-2'>You’re all caught up!</p>
            </div>
        </div>
    </div>
  )
}

export default NotificationsModal