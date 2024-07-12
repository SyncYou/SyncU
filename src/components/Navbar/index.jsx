export default function Navbar(){
    return(
        <>
        <nav className="flex items-center justify-between gap-5 padding">
            <div className="flex flex-1 items-center gap-2 border border-[#E5E7EB] rounded-sm px-3 py-[10px] bg-[#fdfcfe]">
                <img src="/search.svg" alt="" />
                <input className="bg-transparent w-full focus:outline-none" type="text" placeholder="Search" />
            </div>
            <div className="flex items-center gap-2">
                <div className="flex gap-3 items-center border border-[#E5E7EB] rounded-md px-3 py-[10px]">
                    <p className="font-medium text-[14px] leading-5 text-[#374151]">New project</p>
                    <span className="text-[#D1D5DB]">|</span>
                    <img src="/arrow-down.svg" alt="" />
                </div>
                <span className="text-[#D1D5DB]">|</span>
                <div className="flex items-center gap-2">
                    <img src="/bell.svg" alt="" />
                    <div className="flex items-center gap-2 bg-[#F3F4F6] py-1 px-2 rounded-full">
                        <img src="/energy-ellipse.svg" alt="" />
                        <small>0</small>
                        <img src="/plus-circle.svg" alt="" />
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/profile.svg" alt="" />
                        <img src="/arrow-down.svg" alt="" />
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}