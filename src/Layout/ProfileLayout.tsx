import React from 'react'
import ProfilePreview from '../components/Profile/ProfilePreview'
import Header from '../components/Reuseables/Header'
import { Outlet } from 'react-router'

const ProfileLayout: React.FC = () => {
  return (
    <>
    <div className='border-[0.5px] border-[#D6D6E0] hidden md:block'>
      <Header />
    </div>
   <section className="flex w-full h-dvh">
      <div className='w-full h-dvh'>
        <Outlet />
      </div>
      <div className='hidden md:block w-full h-[100vh]  items-center justify-center border-l-[0.5px] border-[#D6D6E0]'>
        <ProfilePreview />
      </div>
   </section>
   </>
  )
}

export default ProfileLayout