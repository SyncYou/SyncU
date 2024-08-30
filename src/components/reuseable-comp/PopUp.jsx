import React from 'react'
import popMail from "../../../public/comp-img/popMail.svg"
import x from "../../../public/comp-img/x.svg"

export function PopUp() {
    return (
        <>
            <button className='flex bg-popUp btn gap-[3px] text-fbg justify-between rounded-xl px-[12px] mb-[5%]' >
                <small className='flex items-center gap-[4px]'  >
                    <img src={popMail} alt="pop mail" /> Email sent successfully!</small>
                <small className='flex items-center gap-[4px]' >
                    <hr className='h-[24px] bg-fbg w-[1px] opacity-[0.2] ' />
                    <img src={x} alt="cancel" />
                </small>
            </button>
        </>
    )
}
