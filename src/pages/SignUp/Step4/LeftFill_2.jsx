import React, { useRef, useState, useEffect } from 'react'
import caret from '/signUp-imgs/CaretUpDown.svg'
import { StackDropDown } from '../../../components/styles/Reuse/StackDropDown';
import Nav_Btn from '../../../components/styles/Reuse/Nav_Btn';
import { useUserStore } from '../../../store/UseUserStore';
import { Skills } from './Skills';
import { Skill } from './Skill';


export function LeftFill_2() {
    const { userDetails, setUserDetails } = useUserStore()
    const [active, setActive] = useState(false)
    const activeRef = useRef(null)

    const [checked, setChecked] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const selectedStack = Skills.find((niche) => niche.id === checked);


    // Function to close modal for stack
    function handleAreaClick(skills) {
        setUserDetails("stack", skills)
    }
    useEffect(() => {
        function handleClickOutside(event) {
            if (activeRef.current && !activeRef.current.contains(event.target)) {
                setActive(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <>
            <div className="gap-6 self-stretch flex-col " ref={activeRef}>
                <h3 className="text-gray-600 font-medium text-sm ">STEP 4 of 5</h3>
                <div className="gap-3 flex-col ">
                    <h1 className="text-[32px] font-semibold text-gray-950">What are you skilled at?</h1>
                    <p className="text-gray-800 text-lg font-normal">This will enable us match you to projects that suits you.</p>
                </div>
            </div>

            <div className="gap-4 flex-col relative">
                <h3 className='text-gray-800 font-normal text-sm'>Add atleast 3/10 skills or stacks</h3>
                <span className={`flex items-start justify-between py-2 px-3 border border-solid  h-[91px] bg-white w-[62%] rounded-lg ${active ? "border-brand-400 shadow-active-state" : "border-gray-200"}`}>
                    <span className="flex items-start flex-col gap-1 w-full">
                        <p className="text-gray-950 text-xs font-medium ">Skills/stacks</p>
                        <input type='text' name='skills' className='text-gray-800 text-base font-medium w-full outline-none' placeholder='Type a skill or stack for e.g, UI design.' onClick={() => { setActive(true); setIsModalOpen(true) }} />
                    </span>
                    <img src={caret} alt="caretUpDown" />
                </span>

                {/* {isModalOpen && <div ref={activeRef}><StackDropDown style="top-[17vh]" selectedStack={selectedStack} handleAreaClick={handleAreaClick} /> </div>} */}

            </div>

            <div className="gap-2 flex-col">
                <h3 className='text-gray-800 font-normal text-sm'>Suggested skills & stacks</h3>
                <span className="flex flex-wrap  gap-2 [&_p]:text-gray-950 [&_p]:flex [&_p]:items-center [&_p]:gap-[10px] [&_p]:rounded-3xl [&_p]:border-gray-300  [&_p]:border [&_p]:border-solid [&_p]:py-1 [&_p]:px-[20px]  [&_p]:hover:cursor-pointer ">
                    {Skills.map((skills) => (<Skill key={skills.id} id={skills.id} stack={skills.skill} checked={checked} setChecked={setChecked} handleAreaClick={handleAreaClick} />))}
                </span>
            </div>

            <Nav_Btn navTo="/final-step" btn_Style={`${userDetails.stack !== "" ? "bg-gray-950 text-opacity-100 text-white" : "text-opacity-40 cursor-default"} `} />
        </>
    )
}
