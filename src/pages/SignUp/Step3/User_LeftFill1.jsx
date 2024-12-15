import React, { useState } from 'react'
import caret from '/signUp-imgs/CaretUpDown.svg'
import { StackDropDown } from '../../../components/styles/Reuse/StackDropDown'
import Nav_Btn from '../../../components/styles/Reuse/Nav_Btn'
import { Stack } from './Stack'
import { Niches } from './Niches';
import { useUserStore } from '../../../store/UseUserStore'

export function User_LeftFill1() {
    const { userDetails, setUserDetails } = useUserStore()
    const [checked, setChecked] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const selectedStack = Niches.find((niche) => niche.id === checked);


    // Function to close modal for stack
    function handleAreaClick(area) {
        setUserDetails("area", area)
        setIsModalOpen(!isModalOpen)
    }

    const isValid = userDetails.area !== "";

    return (
        <>
            <div className="gap-6 self-stretch flex-col ">
                <h3 className="text-gray-600 font-medium text-sm ">STEP 3 of 5</h3>
                <div className="gap-3 flex-col ">
                    <h1 className="text-[32px] font-semibold text-gray-950">What are you into?</h1>
                    <p className="text-gray-800 text-lg font-normal">This will enable us match you to projects that suits you.</p>
                </div>
            </div>

            <div className="gap-4 *:items-center flex-col ">
                <h3 className='text-gray-800 font-normal text-sm'>Choose one</h3>
                <div className='flex flex-row gap-4 '>
                    {Niches.map((items) => (
                        <Stack key={items.id} stack={items.stack} img={items.img} id={items.id} setChecked={setChecked} checked={checked} items={items} setIsModalOpen={setIsModalOpen} />
                    ))}
                </div>
            </div>

            <div className="gap-4 flex-col relative h-fulls">
                <h3 className='text-gray-800 font-normal text-sm'>Pick any option above to enable.</h3>
                <span className='flex items-center justify-between py-2 px-3 border border-solid border-gray-200 bg-gray-100 w-[62%] rounded-lg [&_img]:hover:cursor-pointer'>
                    <span className="flex items-start flex-col gap-2">
                        <p className="text-gray-950 text-xs font-medium ">Area of expertise</p>
                        <p className={`text-gray-400 text-base font-medium ${userDetails.area ? "text-gray-800" : ""}`}>
                            {selectedStack !== Niches.id && userDetails.area || "Select one---"}
                        </p>
                    </span>
                    <img src={caret} alt="caretUpDown" />
                </span>
                {isModalOpen && <StackDropDown style="top-[17vh]" selectedStack={selectedStack} handleAreaClick={handleAreaClick} />}
            </div>

            <Nav_Btn disabled={!isValid} navTo="/step4" btn_Style={`${isValid ? "bg-gray-950 text-opacity-100 text-white" : "text-opacity-40 cursor-not-allowed"} `} />
        </>
    )
}
