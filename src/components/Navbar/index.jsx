export default function Navbar(){
    return(
        <>
        <nav className="flex items-center justify-between gap-5 padding border-b border-[#E5E7EB]">
            <div className="flex flex-1 items-center gap-2 border border-[#E5E7EB] rounded-md px-3 py-[10px] bg-[#fdfcfe]">
                <img src="/src/assets/search.svg" alt="" />
                <input className="bg-transparent w-full focus:outline-none" type="text" placeholder="Search" />
            </div>
            <div className="flex items-center gap-2">
                <div className="flex gap-3 items-center border border-[#E5E7EB] rounded-md px-3 py-[10px]">
                    <p className="font-medium text-[14px] leading-5 text-[#374151]">New project</p>
                    <span className="text-[#D1D5DB]">|</span>
                    <img src="/src/assets/arrow-down.svg" alt="" />
                </div>
                <span className="text-[#D1D5DB]">|</span>
                <div className="flex items-center gap-2">
                    <img src="/src/assets/bell.svg" alt="" />
                    <div className="flex items-center gap-2 bg-[#F3F4F6] py-1 px-2 rounded-full">
                        <img src="/src/assets/energy-ellipse.svg" alt="" />
                        <small>0</small>
                        <img src="/src/assets/plus-circle.svg" alt="" />
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/src/assets/profile.svg" alt="" />
                        <img src="/src/assets/arrow-down.svg" alt="" />
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}