import React, { useState } from 'react'
import img from '/signUp-imgs/img.svg'
import check from '/signUp-imgs/Check.svg'
import Nav_Btn from '../../../components/styles/Reuse/Nav_Btn';
import { useUserStore } from '../../../store/UseUserStore';
import { ProfileImage } from './ProfileImages';

export function LeftFill_3() {
    const { userDetails, setUserDetails } = useUserStore()

    // Handle image upload
    function handleImageUpload(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const uploadImage = reader.result;
                setUserDetails("profileImage", uploadImage);
            };
            reader.readAsDataURL(file)
        }
    }

    // Func for selecting a Avatar image
    function handleAvatarSelect(image) {
        setUserDetails("profileImage", image)
    }

    return (
        <>
            <div className="gap-6 self-stretch flex-col ">
                <h3 className="text-gray-600 font-medium text-sm ">STEP 5 of 5</h3>
                <div className="gap-3 flex-col ">
                    <h1 className="text-[32px] font-semibold text-gray-950">Add a photo...</h1>
                    <p className="text-gray-800 text-lg font-normal">This will help increase your chances of being accepted to work on a project.</p>
                </div>
            </div>

            <div className="gap-4 flex-col relative">
                <h3 className='text-gray-800 font-normal text-base'>Select an avatar </h3>
                <fieldset className='p-1 rounded-full bg-brand-600 absolute top-[5.5vh] z-10 left-[8.5vh]'><img src={check} alt="" /></fieldset>
                <span className='flex items-start gap-4 [&_img]:object-contain relative '>
                    {ProfileImage.map((items) => <img key={items.id} src={items.img} alt='profile avatar' onClick={() => handleAvatarSelect(items.img)} />)}
                </span>
                <div className="gap-4 flex-col">
                    <h3 className='text-gray-800 font-normal text-base'>or upload an image </h3>
                    <label className='rounded-full border-dashed  [&_img]:object-contain border bg-white border-gray-300 h-[80px] w-[80px] flex items-center justify-center *:w-8 *:h-8'>
                        <input type="file" accept='image/*' onChange={handleImageUpload} className="hidden" />
                        <img src={img} alt="update profile image" />
                    </label>
                </div>
            </div>

            <Nav_Btn navTo="/" btn_Style={`${userDetails.profileImage !== "" ? "bg-gray-950 text-opacity-100 text-white" : "text-opacity-40 cursor-default"} `} />
        </>
    )
}
