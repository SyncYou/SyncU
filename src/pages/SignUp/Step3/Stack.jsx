import React from 'react'
import check from '/signUp-imgs/Check.svg'
import { Niches } from './Niches';

export function Stack({ img, stack, id, checked, setChecked, fill, items, setIsModalOpen, isModalOpen }) {
    const clicked = id === checked;

    return (
        <>
            <span onClick={() => {
                setChecked(clicked ? null : id); setIsModalOpen(clicked ? null : id)
            }} className={`p-4 relative cursor-pointer flex flex-col items-center gap-6 w-[137px] rounded-lg border-solid ${clicked ? "border-brand-500  [&_p]:text-brand-500 border-[1.5px] bg-clicked " : "bg-white border border-gray-300 shadow-smallBox [&_p]:text-gray-950"} `}>
                {items.image.map((item, index) => (
                    < fieldset key={index}>
                        {clicked ? <img src={item.fill} alt="niche-icons" /> : <img src={item.img} alt="niche-icons" />}
                    </fieldset>
                ))}
                {
                    clicked && < fieldset className='p-1 rounded-full bg-brand-600 absolute z-10 right-[3vh] top-[2vh]'>
                        <img src={check} alt="" /></fieldset>
                }
                <p className='text-base font-medium text-center'>{stack}</p>
            </span >



        </>
    )
}
