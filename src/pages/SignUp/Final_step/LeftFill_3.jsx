import React from 'react'
import avatar1 from '/signUp-imgs/avatar1.svg'
import avatar2 from '/signUp-imgs/avatar2.svg'
import avatar3 from '/signUp-imgs/avatar3.svg'
import img from '/signUp-imgs/img.svg'
import check from '/signUp-imgs/Check.svg'
import { useNavigate } from 'react-router-dom'
import Nav_Btn from '../../../components/styles/Reuse/Nav_Btn';
import { useUserStore } from '../../../store/UseUserStore';

export function LeftFill_3() {
    const navigate = useNavigate();
    const { userDetails, setUserDetails } = useUserStore()
    return (
        <>
            <div className="gap-6 self-stretch flex-col ">
                <h3 className="text-gray-600 font-medium text-sm ">STEP 5 of 5</h3>
                <div className="gap-3 flex-col ">
                    <h1 className="text-[32px] font-semibold text-gray-950">Add a photo...</h1>
                    <p className="text-gray-800 text-lg font-normal">This will help increase your chances of being accepted to work on a project.</p>
                </div>
            </div>

            <div className="gap-4 flex-col relative">
                <h3 className='text-gray-800 font-normal text-base'>Select an avatar or upload an image</h3>
                <fieldset className='p-1 rounded-full bg-brand-600 absolute top-[5.5vh] z-10 left-[8.5vh]'><img src={check} alt="" /></fieldset>
                <span className='flex items-start gap-4 [&_img]:object-contain relative '>
                    <img src={avatar1} alt="avatar" />
                    <img src={avatar2} alt="avatar" />
                    <img src={avatar3} alt="avatar" />
                    <fieldset className='rounded-full border-dashed border bg-white border-gray-300 h-[80px] w-[80px] flex items-center justify-center *:w-8 *:h-8'>
                        <img src={img} alt="img icon" />
                    </fieldset>
                </span>

            </div>

            <Nav_Btn navTo="/" btn_Style={`${userDetails.area !== "" ? "bg-gray-950 text-opacity-100 text-white" : "text-opacity-40 cursor-default"} `} />
        </>
    )
}
