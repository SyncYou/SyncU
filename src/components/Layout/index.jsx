import React from 'react'
import Navbar from '../Navbar'
import ProjectCollab from '../ProjectCollab'

function Layout() {
  return (
    <section >
        <div className=''>
            <Navbar/>
        </div>
        <div className='pl-[48px] flex'>
            <ProjectCollab/>
        </div>
    </section>
  )
}

export default Layout