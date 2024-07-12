import React from 'react'

const RecommendedCard = () => {
  return (
    <div className='border border-[#D1D5DB] rounded-lg p-4'>
        <div className='flex items-center justify-between'>
            <img src="/vergil.svg" alt="" />
            <button className='border border-[#E5E7EB] rounded-md px-2 py-1 font-medium text-[14px] text-[#374151] capitalize leading-[21px]'>connect</button>
        </div>
        <h1 className='text-[#1F2937] font-medium leading-6 capitalize'>vergil ebong<span className='text-[14px] text-[#6B7280] leading-[16.8px] lowercase'>@vergildesigns</span></h1>
        <p className='text-[14px] leading-[21px] text-[#374151]'>Co-founder @Syncu || Product designer</p>
    </div>
  )
}

export default RecommendedCard