import React from 'react'
import broadcast from '/workspace/broadcast-dark.svg'
import line from '/workspace/line.svg'
import pic from '/collaborators/collab1.svg'
import vergil from '/collaborators/vergil.svg'
import TypeMessage from './TypeMessage'

const Announcements = () => {
  return (
    <div className='h-full w-full'>
        <div className='flex flex-col items-center justify-end'>
            <h1 className='flex items-center gap-2 text-[#1F2937] text-[24px] font-bold leading-[33.6px] my-3'>
                <img src={broadcast} alt="" />
                announcements
            </h1>
            <div className='text-center'>
                <p className='flex items-center gap-1 text-[#6B7280] leading-6 my-3'>This is the start of conversations on the <img src={broadcast} alt="" /> <span className='text-[#374151] font-medium'>announcements</span>channel</p>
                <h3 className='text-[#374151] leading-6 font-semibold tracking-wide'>Channel description</h3>
                <p className='text-[#6B7280]'>This channel is for announcements, here updates will be posted about Syncu</p>
            </div>
        </div>

        <div className='mt-10'>
            <div className='relative w-full'>
                <img className='w-full' src={line} alt="" />
                <p className='drop-shadow drop-shadow-[#00000024] px-3 py-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow rounded text-[#6B7280] font-medium leading-[21px] text-[14px]'>6 July, 2024</p>
            </div>

            <div>
                <div className='flex gap-3 p-2'>
                    <div>
                        <img src={pic} alt="" />
                    </div>
                    <div className='w-full'>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-[#374151] font-semibold text[14px] leading-[21px]'>Henrietta O.</h1>
                            <small className='text-[#6B7280] text-[14px] leading-[21px]'>8:00 AM</small>
                        </div>
                        <div className='my-1 bg-[#F9FAFB] border border-[#F3F4F6] p-2 w-full'>
                            <small className='bg-[#FFF7ED] text-[#EA580C] leading-6 font-medium p-2 rounded'>@everyone</small>
                            <div className='flex flex-col items-start gap-1 leading-6 my-1'>
                                <small>Syncu kickoff meeting</small>
                                <small>Monday, 10 Jul · 19:00 – 20:00</small>
                                <small>Google Meet joining info</small>
                                <small>Video call link: <span className='text-[#0000ff]'>https://meet.google.com/fov-sntd-yhm</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex gap-3 p-2'>
                    <div>
                        <img src={pic} alt="" />
                    </div>
                    <div className='w-full'>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-[#374151] font-semibold text[14px] leading-[21px]'>Henrietta O.</h1>
                            <small className='text-[#6B7280] text-[14px] leading-[21px]'>8:00 AM</small>
                        </div>
                        <div className='my-1 bg-[#F9FAFB] border border-[#F3F4F6] p-2 w-full'>
                            <small className='bg-[#FFF7ED] text-[#EA580C] leading-6 font-medium p-2 rounded'>@everyone</small>
                            <div className='flex flex-col items-start gap-1 leading-6 my-1'>
                                <small className='w-[450px]'>Be reminded that we are having our weekly meeting this Friday 11th July, 2024. Please let’s all endeavor to be available for the meeting.</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative w-full'>
                <img className='w-full' src={line} alt="" />
                <p className='drop-shadow drop-shadow-[#00000024] px-3 py-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow rounded text-[#6B7280] font-medium leading-[21px] text-[14px] capitalize'>today</p>
            </div>

          
            <div className='flex gap-3 p-2'>
                    <div>
                        <img src={vergil} alt="" />
                    </div>
                    <div className='w-full'>
                        <div className='flex items-center gap-2'>
                            <h1 className='text-[#374151] font-semibold text[14px] leading-[21px] capitalize'>You</h1>
                            <small className='text-[#6B7280] text-[14px] leading-[21px]'>Just now</small>
                        </div>
                        <div className='my-1 p-2'>
                            <small className='text-[#6B7280] leading-6'>joined the channel</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='px-2 my-2'>
            <TypeMessage/>
        </div>
    </div>
  )
}

export default Announcements