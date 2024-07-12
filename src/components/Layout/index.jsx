import React from 'react'
import Navbar from '../Navbar'
import ProjectCollab from '../ProjectCollab'

function Layout() {
  return (
    <section>
        <div>
            <Navbar/>
        </div>
        <div>
            <ProjectCollab/>
        </div>
    </section>
  )
}

export default Layout