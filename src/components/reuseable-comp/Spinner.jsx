import React from "react";

export function Spinner() {
    return <>
        <div className="flex flex-col justify-center h-screen items-center gap-[16px]">
            <svg className="animate-spin h-[38px] w-[38px] text-changeColor" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>            <p className="text-base text-h4 ">
                Loading please wait...
            </p>
        </div>
    </>
}