import React from 'react'
import logo from '/Logo.svg'

const Loading: React.FC = () => {
  return (
    <section className='bg_overlay flex items-center justify-center'>
            <div>
                <img src={logo} alt="syncu" />
            </div>
    </section>
  )
}

export default Loading