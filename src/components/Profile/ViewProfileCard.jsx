import React from 'react'

const ViewProfileCard = ({collab}) => {
  return (
    <div className='bg-white border-[0.5px] border-[#9CA3AF] drop-shadow-lg drop-shadow-[#0000001F] rounded-t-lg rounded-br-none rounded-bl-lg p-3 w-[300px]'>
      <div className='flex items-center justify-between'>
        <img src={collab} alt="" />
        <button className='border-[1.5px] border-[#E5E7EB] rounded-lg p-2 font-medium text-[#374151] text-[14px] leading-[21px]'>View profile</button>
      </div>
      <div>
        <h2 className='font-medium text-[#1F2937] leading-6'>Henrietta O. <span className='text-[14px] leading-4 text-[#6B7280] font-normal'>@henriettabby</span></h2>
        <p className='text-[#374151] leading-5 text-[14px]'>Product manager at Syncu || Co-founder of Syncu</p>
      </div>
    </div>
  )
}

export default ViewProfileCard