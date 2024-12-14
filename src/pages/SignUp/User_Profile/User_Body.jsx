import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { User_RightFill } from './User_RightFill'

export default function User_Body() {
    const location = useLocation();
    return (
        <>
            {location.pathname !== "/finishing" ?
                <main className="flex items-center [&_section]:w-1/2 h-full  mt-[3%] ">
                    <section className='flex flex-col justify-center items-center h-full pt-[5%] px-8 bg-white '>
                        <div className="flex flex-col items-start gap-10 w-full [&_div]:flex [&_div]:items-start [&_div]:w-full">
                            <Outlet />
                        </div>
                    </section>
                    <User_RightFill />
                </main> :
                <User_RightFill rightStyle="w-[50%]" />}
        </>
    )
}
