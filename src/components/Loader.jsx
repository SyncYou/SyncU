import React, { useEffect } from 'react'
import spinner from "./imgs/comp-img/spinner.svg";


export function Loader() {

    useEffect(() => {
        setTimeout(() => {

            setText(
                "Hey man"
            )
        }, 3000)
    }, [])
    return <>
        <body className='signUpBody'>
            <main className="signUpMain pt-[17%]">
                <div className="w-[36px]">
                    <img src={spinner} alt="" className="" />
                </div>
                <p className="text-base text-h4 ">
                    Loading please wait...
                </p>

            </main>
        </body>


    </>
}
