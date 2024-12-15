// import React, { useState } from 'react'
// import check from '/signUp-imgs/Check.svg'

// export function Avatar({ items, handleAvatarSelect }) {
//     const [checked, setChecked] = useState(null)
//     const click = checked ? items.id : items.id

//     function handleClickedAvatar() {
//         if (checked === items.id) {
//             setChecked(null)
//         } else {
//             setChecked(items.id)
//         }
//     }
//     return (
//         <>
//             <span onClick={() => setChecked(click)} className='relative'>
//                 <img src={items.img} alt='profile avatar' onClick={() => handleAvatarSelect(items.img)} />

//                 {click && <fieldset className='p-1 rounded-full bg-brand-600 absolute top-[5.5vh] z-10 left-[8.5vh]'><img src={check} alt="" /></fieldset>}
//             </span>
//         </>
//     )
// }


import React, { useState } from 'react'
import check from '/signUp-imgs/Check.svg'

export function Avatar({ items, handleAvatarSelect }) {
    const [checked, setChecked] = useState(null)
    const click = items.id === checked
    const isChecked = click ? items.id : items.id

    return (
        <>
            <span onClick={() => setChecked(isChecked)} className='relative'>
                <img src={items.img} alt='profile avatar' onClick={() => handleAvatarSelect(items.img)} />

                {click && <fieldset className='p-1 rounded-full bg-brand-600 absolute top-[5.5vh] z-10 left-[8.5vh]'><img src={check} alt="" /></fieldset>}
            </span>
        </>
    )
}
