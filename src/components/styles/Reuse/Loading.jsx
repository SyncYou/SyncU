import React from 'react'
import Logo from '/signUp-imgs/Logo.svg'

export function Loading() {
    return (
        <div className='absolute top-0 bottom-0 left-0 right-0 overflow-hidden bg-loading z-20 backdrop-blur-[2px] flex items-center justify-center [&_img]:w-[63px] [&_img]:h-[63px] [&_img]:object-contain [&_img]:mb-[5%]'>
            <img src={Logo} alt="synU" />
        </div>
    )
}
