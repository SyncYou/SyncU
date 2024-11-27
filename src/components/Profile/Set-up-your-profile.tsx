import React from 'react'
import Header from '../Reuseables/Header'

const SetUpYourProfile: React.FC = () => {
  return (
    <section className='p-3'>
        <div>
            <Header/>
        </div>
        <div className='h-full w-full flex flex-col items-center justify-center mt-20 space-y-5'>
            {/* Image Profile */}
            <div>
                <h2 className='font-semibold text-secondary text-center text-[28px] leading-[32px]'>Set up your profile🌟</h2>
                <p className='text-gray text-center leading-6 font-normal text-[16px]'>Just a few more steps to go...</p>
            </div>

            <div>
                <button className='text-[#F5F5FA] leading-6 text-[16px] text-center bg-secondary py-4 px-7 rounded-full'>Get started</button>
            </div>
        </div>
    </section>
  )
}

export default SetUpYourProfile