import { Outlet } from 'react-router-dom'
import Logo from '/signUp-imgs/Logo.svg'

export default function RootLayout() {
    return (
        <div className='bg-white w-full relative text-inter'>
            <header className='flex top-0 fixed justify-between py-4 items-center px-5 right-0 left-0 bg-white z-20 shadow-md'>
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="syncU logo" />
                    <p className='items-center text-[21px] font-bold leading-normal text-inter text-logo'>syncu</p>
                </div>
            </header>
            <Outlet />
        </div>
    )
}
