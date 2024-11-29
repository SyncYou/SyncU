import React from 'react'
import { FaUser } from "react-icons/fa6";
import sent from '/sent.svg'
import location from '/location.svg'
import target from '/target.svg'
import stack from '/stack-star.svg'

const ProfilePreview: React.FC = () => {
  return (
   <section className='bg-[#ffffff] border border-[#E6E6F0] shadow-xl shadow-[#69696917] p-[30px] rounded-[24px] flex flex-col items-center justify-between w-[450px] mx-auto mt-6'>
        <div className='flex flex-col items-center justify-between'>
            <div className='border-4 border-[#D6D6E0] rounded-full p-5 flex items-center justify-center'>
                <FaUser size={50} className='text-[#D6D6E0]'/>
            </div>
            <div className=' my-5 font-semibold flex items-center flex-col justify-center gap-2'>
                <h2 className=' text-secondary leading-[32px] text-[24px] text-center'>Your name</h2>
                <small className=' font-medium text-gray text-center text-[14px] leading-6'>@username</small>

                <div className='flex items-center justify-center gap-3 border-[0.8px] border-[#D6D6E0] py-2 px-5 rounded-full
                my-5'>
                    <button className='text-secondary font-medium text-[14px] leading-6 text-center'>Start collaborating</button>
                    <img src={sent} alt="sent icon" />
                </div>
            </div>
        </div>

        <div className='w-full space-y-5'>
            <div className='flex items-center justify-between gap-2 w-full'>
                <div className='flex items-center flex-1 gap-2'>
                    <img src={location} alt="location icon" />
                    <p className='text-gray font-medium leading-6 text-[14px]'>Location</p>
                </div>
                <small className='text-secondary leading-4 font-medium'>N/A</small>
            </div>

            <div className='flex items-center justify-between gap-2 w-full'>
                <div className='flex items-center flex-1 gap-2'>
                    <img src={target} alt="location icon" />
                    <p className='text-gray font-medium leading-6 text-[14px]'>Field of expertise</p>
                </div>
                <small className='text-secondary leading-4 font-medium'>N/A</small>
            </div>

            <div className='flex justify-between gap-2 w-full flex-col'>
                <div className='flex items-center flex-1 gap-2'>
                    <img src={stack} alt="location icon" />
                    <p className='text-gray font-medium leading-6 text-[14px]'>Field of expertise</p>
                </div>
                <div className='flex items-center gap-3'>
                {
                    Array.from({length:3}).map((_,idx) => (
                        <small className='border-dotted border rounded-full border-[#D6D6E0] py-2 px-5 text-secondary leading-4 font-medium' key={idx}>N/A</small>
                    ))
                }
                </div>
            </div>
        </div>
   </section>
  )
}

export default ProfilePreview