import React, { useState } from 'react'
import check from '/signUp-imgs/Check.svg'

export function Avatar({ items, handleAvatarSelect }) {
    const [checked, setChecked] = useState(null)

    function handleClickedAvatar() {
        if (checked === items.id) {
            setChecked(null)
        } else {
            setChecked(items.id)
        }
    }
    return (
        <>
            <span onClick={handleClickedAvatar} className='relative'>
                <img src={items.img} alt='profile avatar' onClick={() => handleAvatarSelect(items.img)} />

                {checked === items.id && <fieldset className='p-1 rounded-full bg-brand-600 absolute top-[5.5vh] z-10 left-[8.5vh]'><img src={check} alt="" /></fieldset>}
            </span>
        </>
    )
}
