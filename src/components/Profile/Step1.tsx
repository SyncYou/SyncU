import React from 'react'
import Header from '../Reuseables/Header'
import dropdown from '/scroll.svg'

const Step1: React.FC = () => {
  return (
    <section>
        <div className='border-b border-light'>
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

                <div className='absolute bottom-24 left-0 p-2 h-[200px] w-full overflow-auto bg-[#ffffff] rounded-xl border border-[#E6E6F0] shadow-lg shadow-[#6969691A] mx-auto'>
                    {/* list of countries */}
                    <div>
                        <ul>
                            {
                                Array.from({length: 8}).map((_, idx) => (
                                    <li key={idx} className='text-gray font-medium leading-6 text-[16px] p-2'>Nigeria</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <button className="text-[#ffffff] w-1/2 py-3 px-5 rounded-full text-center leading-6 font-medium bg-secondary">Next</button>
            </div>
            </form>
        </div>
    </section>
  )
}

export default Step1