import arrowDown from "/src/assets/img/navbar/arrow-down.svg"
import search from "/src/assets/img/navbar/search.svg"
import bellIcon from "/src/assets/img/navbar/bell.svg"
import Syncoins from "/src/assets/img/navbar/energy-ellipse.svg"
import plusCircle from "/src/assets/img/navbar/plus-circle.svg"
import Profile from "/src/assets/img/navbar/Profile.svg"

export default function Navbar(){
    return(
        <>
        <nav className="flex items-center justify-between gap-5 padding border-b border-[#E5E7EB]">
            <div className="flex flex-1 items-center gap-2 border border-[#E5E7EB] rounded-md px-3 py-[10px] bg-[#fdfcfe]">
                <img src={search} alt="" />
                <input className="bg-transparent w-full focus:outline-none" type="text" placeholder="Search" />
            </div>
            <div className="flex items-center gap-2">
                <div className="flex gap-3 items-center border border-[#E5E7EB] rounded-md px-3 py-[10px]">
                    <p className="font-medium text-[14px] leading-5 text-[#374151]">New project</p>
                    <span className="text-[#D1D5DB]">|</span>
                    <img src={arrowDown} alt="" />
                </div>
                <span className="text-[#D1D5DB]">|</span>
                <div className="flex items-center gap-2">
                    <img src={bellIcon} alt="" />
                    <div className="flex items-center gap-2 bg-[#F3F4F6] py-1 px-2 rounded-full">
                        <img src={Syncoins} alt="" />
                        <small>0</small>
                        <img src={plusCircle} alt="" />
                    </div>
                    <div className="flex items-center gap-2">
                    <img src={Profile} alt="" />
                        <img src={arrowDown} alt="" />
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}