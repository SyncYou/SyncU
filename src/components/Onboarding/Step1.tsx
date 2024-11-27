import React from 'react'
import onboarding from '/onboarding.svg'

const Step1: React.FC = () => {
  return (
   <section className='h-full w-full bg-[#F6F2FC]'>
        <div className='mt-20 px-16'>
            <h1 className='font-semibold tracking-tight text-center text-[32px] leading-[40px] text-primary'>Collaborate & build with like-minded techies.</h1>
        </div>
        <div className='mt-20'>
            <img src={onboarding} />
        </div>
   </section>
  )
}

export default Step1