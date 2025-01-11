import React from 'react'
import logo from '/Logo.svg'
import syncu from '/syncu.svg'

const Header: React.FC = () => {
  return (
   <header className='w-full p-5 flex items-center gap-2 h-fit'>
    <img src={logo} alt='syncu logo' />
    <img src={syncu} alt="syncu" />
   </header>
  )
}

export default Header