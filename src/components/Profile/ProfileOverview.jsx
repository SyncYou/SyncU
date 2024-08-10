import React from 'react'
import { NavLink } from 'react-router-dom'
import briefcase from '/profile/briefcase.svg'
import location from '/profile/location.svg'
import linkGray from '/profile/link-gray.svg'
import linkSquare from '/profile/link-square.svg'
import calendar from '/profile/calendar-add.svg'
import behance from '/social/Behance.svg'
import twitter from '/social/X.svg'
import figma from '/tags/Figma.svg'

const ProfileOverview = () => {
    const profileTab = [
        {
            name: 'overview',
            route: '/profile',
            active: true
        },
        {
            name: 'showcased projects',
            route: '/profile/showcased-projects',
            active: false
        },
        {
            name: 'working on',
            route: '/profile/working-on',
            active: false
        },
        {
            name: 'activities',
            route: '/profile/activities',
            active: false
        },
    ]

  return (
   <section>
    <div className='flex items-center justify-between border-b pb-3'>
        {profileTab.map((tab,i) => (
        <NavLink to={`${tab.route}`} key={i} className={`${tab.active ? 'bg-[#1F2937] shadow leading-5 font-semibold text-white py-2 px-5 rounded-lg capitalize' : 'bg-transparent text-[#6B7280] text-[14px] leading-5 font-medium py-2 px-5 capitalize'}`}>
            {tab.name}
        </NavLink>
        ))}
     
    </div>

    <div className='border border-[#E5E7EB] p-5 rounded-xl my-5'>
        <h3 className='text-[#111827] font-semibold text-[18px] leading-[30px] border-b border-[#E5E7EB] pb-3'>About</h3>

        <div>
            <div className='flex items-center gap-3 py-2'>
                <img src={briefcase} alt="" />
                <small className='text-[#6B7280] leading-6'>works at <span className='text-[#374151]'>Syncu</span> </small>
            </div>
            <div className='flex items-center gap-3 py-2'>
                <img src={location} alt="" />
                <small className='text-[#6B7280] leading-6'>comes from <span className='text-[#374151]'>Nigeria</span> </small>
            </div>
            <div  className='flex items-center gap-3 py-2'>
                <img src={linkGray} alt="" />
                <small className='text-[#374151] flex gap-2 underline'>www.gojosat.anime <img src={linkSquare} alt="" /></small>
            </div>
            <div  className='flex items-center gap-3 py-2'>
                <img src={calendar} alt="" />
                <small className='text-[#6B7280] leading-6'>joined <span className='text-[#374151]'>2nd July , 2024</span></small>
            </div>
        </div>

        <div className='flex items-center gap-3 my-3'>
            <img src={behance} alt="" />
            <img src={twitter} alt="" />
        </div>
    </div>

    <div className='border border-[#E5E7EB] p-5 rounded-xl my-5'>
    <h3 className='text-[#111827] font-semibold text-[18px] leading-[30px] border-b border-[#E5E7EB] pb-3'>Skills / toolstacks</h3>

    <div className="relative flex items-center flex-wrap gap-3 w-full my-3 p-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-md">
               <div className='flex items-center gap-2 p-2 border border-[#D1D5DB] rounded-full'>
                <img src={figma} alt="" />
                <small className='text-[#1F2937] capitalize'>figma</small>
               </div>
               <div className='flex items-center gap-2 p-2 border border-[#D1D5DB] rounded-full'>
                {/* <img src={figma} alt="" /> */}
                <small className='text-[#1F2937] capitalize text-nowrap'>UI design</small>
               </div>
               <div className='flex items-center gap-2 p-2 border border-[#D1D5DB] rounded-full'>
                {/* <img src={figma} alt="" /> */}
                <small className='text-[#1F2937] capitalize text-nowrap'>User Experience design</small>
               </div>
               <div className='flex items-center gap-2 p-2 border border-[#D1D5DB] rounded-full'>
                {/* <img src={figma} alt="" /> */}
                <small className='text-[#1F2937] capitalize text-nowrap'>product design</small>
               </div>
               <div className='flex items-center gap-2 p-2 border border-[#D1D5DB] rounded-full'>
                {/* <img src={figma} alt="" /> */}
                <small className='text-[#1F2937] capitalize text-nowrap'>3D design</small>
               </div>
                </div>
    </div>
   </section>
  )
}

export default ProfileOverview