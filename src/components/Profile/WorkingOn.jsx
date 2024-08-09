import React from 'react'
import agreement from '/profile/agreement.svg'
import { NavLink } from 'react-router-dom'

const WorkingOn = () => {
    const profileTab = [
        {
            name: 'overview',
            route: '/profile',
            active: false
        },
        {
            name: 'showcased projects',
            route: '/profile/showcased-projects',
            active: false
        },
        {
            name: 'working on',
            route: '/profile/working-on',
            active: true
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

   <div className='flex flex-col items-center justify-center w-full mt-10'>
       <img src={agreement} alt="" />
       <p className='text-[#6B7280] leading-6 p-3'>You are not actively collaborating on any projects.</p>
   </div>
  </section>
  )
}

export default WorkingOn