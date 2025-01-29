import { Outlet } from 'react-router-dom'
import Logo from '/signUp-imgs/Logo.svg'

export default function RootLayout() {
    return (
        <div className='bg-white w-full relative text-inter'>
            <header className='flex top-0 w-full fixed justify-between py-4 px-8 items-center self-stretch bg-white border-b-[0.5px] border-gray-300 z-20'>
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="syncU logo" />
                    <p className='items-center text-[21px] font-bold leading-normal text-inter text-logo'>syncu</p>
                </div>
            </header>
            <Outlet />
        </div>
    )
}
