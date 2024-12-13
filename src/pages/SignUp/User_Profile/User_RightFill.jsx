import React from 'react'
import Send from '/signUp-imgs/Send.svg'
import Send1 from '/signUp-imgs/Send1.svg'
import target from '/signUp-imgs/Target.svg'
import Stack from '/signUp-imgs/Stack-Star.svg'
import { IoLocationOutline } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import avatar1 from '/signUp-imgs/avatar1.svg'
import profile from '/signUp-imgs/profile.svg'
import Button from '../../../components/styles/Reuse/Button'
import { useUserStore } from '../../../store/UseUserStore'

export function User_RightFill({ rightStyle }) {

    const { userDetails } = useUserStore();

    const location = useLocation();

    return (
        <>
            <section className='flex flex-col justify-center items-center h-full  bg-gray-100 py-[100px] pl-[56px] pr-[41px] '>
                <div className={` px-[31px] py-[39px] flex flex-col items-center gap-8 border border-gray-200 rounded-3xl bg-white shadow-rightShadow [&_div]:flex [&_div]:items-center  w-full ${rightStyle}`}>
                    <div className='gap-6 flex-col'>
                        <div className="gap-4 flex-col">

                            <div className={`flex-col gap-1 ${userDetails.profileImage ? "rounded-full  border-4 border-[#E5E5E9]" : ""}`}>
                                {<img src={userDetails.profileImage || profile} alt="User Profile Image " className={`rounded-full object-cover ${userDetails.profileImage ? "w-[108px] h-[108px]" : ""} `} />}
                            </div>

                            <div className="flex-col gap-1 [&_span]:text-gray-800 [&_span]:font-medium [&_span]:text-base">
                                <h2 className='text-2xl font-semibold text-gray-950'>{userDetails.name}</h2>
                                <span>{userDetails.email}</span>
                            </div>
                        </div>

                        <Button style={`${location.pathname !== "/finishing" ? "opacity-40 border-opacity-100" : "opacity-100"}`}>
                            Start collaborating <img src={Send} alt="send Icon" />
                        </Button>

                    </div>

                    <hr className='border-gray-200 w-full' />


                    <div className='gap-6  w-full flex-col'>
                        <div className=' flex-row justify-between w-full [&_p]:text-gray-800 [&_p]:font-medium [&_p]:text-sm'>
                            <span className='flex items-center gap-2'>
                                <span className="*:w-[22px] *:h-[22px]">
                                    <IoLocationOutline />
                                </span>
                                <p>Location</p>
                            </span>
                            <p className='text-gray-950'>{userDetails.location}</p>
                        </div>
                        <div className=' flex-row justify-between w-full [&_p]:text-gray-800 [&_p]:font-medium [&_p]:text-sm '>
                            <span className='flex items-center gap-2'>
                                <img src={target} alt="target_icon" className='w-[22px] h-[22px]' />
                                <p>Area of expertise</p>
                            </span>
                            <p className='text-gray-950'>{userDetails.area || "N/A"}</p>
                        </div>
                        <span className='flex-col flex gap-4 w-full items-start [&_p]:text-gray-800 [&_p]:font-medium [&_p]:text-sm'>
                            <span className='flex items-center gap-2'>
                                <img src={Stack} alt="Stack-Star" className="*:w-[22px] *:h-[22px]" />
                                <p>Skills/stacks</p>
                            </span>
                            <div className="gap-4 [&_p]:text-gray-950 [&_p]:rounded-3xl [&_p]:border-gray-300  [&_p]:border [&_p]:py-1 [&_p]:px-[20px] w-full">
                                {userDetails.stack.map((skill, index) => (<p key={index} className={`${skill === "N/A" ? "border-dashed " : "border-solid shadow-xs"}`}>{skill}</p>))}
                            </div>
                        </span>
                    </div>
                </div>
            </section >
        </>
    )
}
