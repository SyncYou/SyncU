import React from 'react'
import TellUsAboutYourself from '../components/Profile/Tell-us-about-yourself'
import ProfilePreview from '../components/Profile/ProfilePreview'
import Header from '../components/Reuseables/Header'

const ProfileLayout: React.FC = () => {
  return (
    <>
    <div className='border-[0.5px] border-[#D6D6E0]'>
      <Header />
    </div>
   <section className="flex w-full h-[100vh] overflow-hidden">
      <div className='w-full h-full'>
        <TellUsAboutYourself />
      </div>
      <div className='hidden md:block w-full h-[100vh] flex items-center justify-center border-l-[0.5px] border-[#D6D6E0]'>
        <ProfilePreview />
      </div>
   </section>
   </>
  )
}

export default ProfileLayout