import React from 'react'

const TagsModal = () => {
  return (
    <div className='border border-[#D1D5DB] bg-white shadow-md h-[243px] rounded-lg p-2 z-20 w-full absolute top-10 overflow-hidden'>
      <div className='bg-[#F9FAFB] border border-[#E5E7EB] rounded p-2 flex items-center gap-3'>
        <img src="/src/assets/search.svg" alt="" />
        <input className='bg-transparent focus:outline-none text-[#9CA3AF] leading-6' type="text" placeholder='Search' />
      </div>

      <div className='overflow-auto h-full'>
        <div className='p-2 border-b border-[#E5E7EB]'>
          <small className='text-[#374151] leading-6'>3D design</small>
        </div>
        <div className='flex items-center gap-3 p-2  border-b border-[#E5E7EB]'>
          <img src="/src/assets/Ae.svg" alt="" />
          <small className='text-[#374151] leading-6'>Adobe After Effets</small>
        </div>
        <div className='flex items-center gap-3 p-2  border-b border-[#E5E7EB]'>
          <img src="/src/assets/illustrator.svg" alt="" />
          <small className='text-[#374151] leading-6'>Adobe illustrator</small>
        </div>
        <div className='flex items-center gap-3 p-2  border-b border-[#E5E7EB]'>
          <img src="/src/assets/Apache.svg" alt="" />
          <small className='text-[#374151] leading-6'>Apache stark</small>
        </div>
        <div className='p-2 border-b border-[#E5E7EB]'>
          <small className='text-[#374151] leading-6'>3D design</small>
        </div>
        <div className='flex items-center gap-3 p-2  border-b border-[#E5E7EB]'>
          <img src="/src/assets/Ae.svg" alt="" />
          <small className='text-[#374151] leading-6'>Adobe After Effets</small>
        </div>
        <div className='flex items-center gap-3 p-2  border-b border-[#E5E7EB]'>
          <img src="/src/assets/illustrator.svg" alt="" />
          <small className='text-[#374151] leading-6'>Adobe illustrator</small>
        </div>
        <div className='flex items-center gap-3 p-2  border-b border-[#E5E7EB]'>
          <img src="/src/assets/Apache.svg" alt="" />
          <small className='text-[#374151] leading-6'>Apache stark</small>
        </div>
      </div>
    </div>
  )
}

export default TagsModal