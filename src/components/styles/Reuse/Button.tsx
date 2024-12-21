import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ style, children, linkTo, onClick, disabled } ) {
    return (
        <>

            {linkTo ? <Link to={linkTo}>
                <button className={`flex py-[10px] px-6 justify-center items-center gap-[10px] rounded-3xl border border-gray-300 text-base font-medium text-gray-950 ${style}`} disabled={disabled}>
                    {children}
                </button>
            </Link >
                :
                <button onClick={onClick} className={`flex py-[10px] px-6 justify-center items-center gap-[10px] rounded-3xl border border-gray-300 text-base font-medium text-gray-950 ${style}`} disabled={disabled}>
                    {children}
                </button>
            }

        </>
    )
}
