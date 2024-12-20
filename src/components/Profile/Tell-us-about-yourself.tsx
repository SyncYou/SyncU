import React, { useState } from 'react'
import Header from '../Reuseables/Header'
import dropdown from '/scroll.svg'
import CountryModal from '../Reuseables/CountryModal'
import ControlledButton from '../Reuseables/ControlledButton'

const TellUsAboutYourself: React.FC = () => {
    const [disable, setDisable] = useState(true);
  return (
    <section>
        <div className='border-b border-light md:hidden'>
            <Header/>
        </div>

        <div className='p-5'>
            <small className='font-medium text-[14px] leading-5 text-[#8C8C99]'>STEP 1 of 5</small>
            <div className='my-5'>
                <h2 className='font-semibold text-[24px] leading-[32px] text-secondary'>Tell us about yourself.</h2>
                <p className='text-gray leading-6 font-normal text-[16px] py-2'>This will help us give you a more personalised experience.</p>
            </div>

            <form className='space-y-5'>
            <div className="border border-[#E6E6F0] rounded-xl py-2 px-3 flex flex-col gap-2 focus:border focus:border-primary focus:shadow focus:shadow-[#EDE4FA]">
                <label className="text-secondary leading-6 text-[16px] font-normal" htmlFor="firstName">First name</label>
                <input className="focus:outline-none" name="firstName" type="text" placeholder="John" />
            </div>
            <div className="border border-[#E6E6F0] rounded-xl py-2 px-3 flex flex-col gap-2 focus:border focus:border-primary focus:shadow focus:shadow-[#EDE4FA]">
                <label className="text-secondary leading-6 text-[16px] font-normal" htmlFor="lastName">Last name</label>
                <input className="focus:outline-none" name="lastName" type="text" placeholder="Doe" />
            </div>

            <div className="border border-[#E6E6F0] rounded-xl py-2 px-3 flex flex-col gap-2 focus:border focus:border-primary focus:shadow focus:shadow-[#EDE4FA] relative">
                <label className="text-secondary leading-6 text-[16px] font-normal" htmlFor="country">Country of residence</label>
                <div className='flex items-center justify-between'>
                <input className="focus:outline-none" name="country" type="text" placeholder="Select country---" />
                    <img src={dropdown} alt="drop down" />
                </div>

               {/* <CountryModal /> */}
            </div>

            <div>
                <ControlledButton
                disable={disable}
                label="Next"
              />
            </div>
            </form>
        </div>
    </section>
  )
}

export default TellUsAboutYourself