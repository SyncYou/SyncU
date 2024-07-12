import React from 'react'
import Navbar from '../Navbar'
import ProjectCollab from '../ProjectCollab'

function Layout() {
  return (
    <section >
        <div className='sticky top-0 right-0 bg-white'>
            <Navbar/>
        </div>
        <div className='pl-[48px] flex'>
            <ProjectCollab/>
        </div>
    </section>
  )
}

export default Layout