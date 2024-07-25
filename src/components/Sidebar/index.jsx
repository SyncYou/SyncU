import { useState } from "react"
import { NavLink } from "react-router-dom"

export  default function Sidebar(){
    const [display, setDisplay] = useState(false)
    const [navFoundation, setNavFoundation] = useState([
        {
          title: 'collaborate',
          icon: '/agreement.svg',
          notification: false,
          active: true,
        },
        {
          title: 'showcase',
          icon: '/projector.svg',
          notification: true,
          active: false,
        },
        {
          title: 'post',
          icon: '/pencil-edit.svg',
          notification: true,
          active: false,
        },
        {
          title: 'connect',
          icon: '/user-search.svg',
          notification: false,
          active: false,
        }
      ]);
    // const nav_foundation = [
    //     {
    //         title: 'collaborate',
    //         icon: '/agreement.svg',
    //         notification: false,
    //         active: true,
    //     },
    //     {
    //         title: 'showcase',
    //         icon: '/projector.svg',
    //         notification: true,
    //         active: false,
    //     },
    //     {
    //         title: 'post',
    //         icon: '/pencil-edit.svg',
    //         notification: true,
    //         active: false,
    //     },
    //     {
    //         title: 'connect',
    //         icon: '/user-search.svg',
    //         notification: false,
    //         active: false,
    //     }
    // ]

    const handleItemClick = (index) => {
        const updatedNavFoundation = navFoundation.map((item, i) => ({
          ...item,
          active: i === index,
        }));
        setNavFoundation(updatedNavFoundation);
      };
    
    return(
        <>
       <aside className="w-full pad">
        <div>
            <div className="flex items-center justify-center py-[12px]">
                <img src="/Logo.svg" alt="logo" />
            </div>
            <div className="flex flex-col gap-3 my-5">
                {
                    navFoundation.map((item, i) => (
                        <div key={i} className={`${item.active ? 'bg-[#1F2937] text-[#D1D5DB] font-semibold' : 'bg-transparent hover:bg-[#e1e3e5] '} flex p-2 gap-3 items-center rounded-md cursor-pointer`} onClick={() =>handleItemClick(i)}>
                            <div className="relative">
                            <img src={item.icon} alt={item.title} />
                            {
                                item.notification && (
                                    <img src="/Pop-up.svg" alt="" className={`${item.active ? 'text-white' : 'text-[#1F2937]'}absolute -right-1 top-0`} />
                                )
                            }
                            </div>
                            <p className="capitalize">{item.title}</p>
                        </div>
                    ))
                }
            </div>
            <div className="my-5">
                <div className="flex gap-2 items-center justify-between">
                    <p className="text-[#6B7280] font-medium text-[14px]">My projects</p>
                    <img onClick={() => {
                        setDisplay(prev => !prev)
                    }} src="/arrow-down.svg" alt="" className="cursor-pointer" />
                </div>
                {
                    display && (
                <div className="my-5">
                    <div className="flex gap-3 cursor-pointer">
                        <img src="/search-circle.svg" alt="" />
                        <p className="text-[16px] font-normal text-[#6B7280]">Browse projects</p>
                    </div>
                </div>
                    )
                }
            </div>
            <div className="flex gap-3 items-center my-5 cursor-pointer">
                <img src="/energy-ellipse.svg" alt="" />
                <p className="text-[#6B7280] leading-6">Get syncoins</p>
            </div>
            <div className="flex gap-3 items-center my-5 cursor-pointer">
                <img src="/profile.svg" alt="" />
                <p className="text-[#6B7280] leading-6">My profile</p>
            </div>
            <div>
                <p className="text-[12px] font-semibold leading-[18px] text-[#6B7280]">Terms and Conditions</p>
                <p className="text-[12px] font-semibold leading-[18px] text-[#6B7280]">Privacy policy</p>
                <small className="text-[10px] font-semibold leading-[15px] text-[#6B7280]">Syncu Ltd &copy; {new Date().getFullYear()} All rights reserved</small>
            </div>
        </div>
       </aside>
        </>
    )
}