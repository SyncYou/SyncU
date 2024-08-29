import React from 'react'
import search from '/navbar/search.svg'
import folder from '/workspace/folder.svg'
import vergil from '/collaborators/vergil.svg'
import more from '/icons/more-horizontal.svg'
import { Outlet, useNavigate } from 'react-router-dom'
import useFetch from '../../utils/hooks/useFetch'

const ManageProjects = () => {
    const navigate = useNavigate()
    const {
        data: projects,
        isPending,
        error,
      } = useFetch("http://localhost:5000/projects");
  return (
    <div className='p-10 relative'>
        <div>
            <h1 className='text-[#1F2937] font-bold text-[30px] leading-[30px] -tracking-wide my-2'>Manage projects</h1>
            <div className='flex items-center justify-between w-full'>
            <div className='flex items-center gap-2 w-full max-w-[500px] flex-1 border border-[#E8D8FC] p-2 rounded my-5 bg-[#F9FAFB]'>
                <img src={search} alt="" />
                <input className='flex-1 bg-transparent focus:outline-none leading-6 text-[#9CA3AF] w-full' type="text" placeholder='Search for projects of projector creator...' />
            </div>
            <button onClick={() => {
                navigate('/manage/create-project')
            }} className="flex items-center gap-2 border border-[#E5E7EB] rounded-lg py-2 px-3 bg-[#672A9F] text-[#F9FAFB]">
              <img src="/icons/Vector.svg" alt="" />
              <span>Create project</span>
            </button>
            </div>
        </div>

        <div className='border border-[#E5E7EB] rounded-lg'>
            <div className='grid grid-cols-4 border-b border-[#E5E7EB] py-3 px-5'>
                <h1 className='col-span-2 text-[#6B7280] leading-6'>Project name</h1>
                <h1 className='text-[#6B7280] leading-6'>Created by</h1>
                <h1 className='text-[#6B7280] leading-6'>Last viewed</h1>
            </div>

            <div>
                {
                    projects && projects.map(project => (
                <div key={project.id} className='grid grid-cols-4 p-3 bg-[#F3F4F6] m-3 rounded'>
                    <div className='col-span-2 flex items-center gap-2'>
                        <img src={folder} alt="" />
                        <h2 className='text-[#1F2937] font-semibold leading-6'>{project.title}</h2>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={vergil} alt="" />
                        <h2 className='text-[#1F2937] font-semibold leading-6'>vergil</h2>
                    </div>
                    <div className='flex items-center w-full justify-between'>
                        <small className='text-[#6B7280] leading-6'>Just now</small>
                        <img src={more} alt="" />
                    </div>
                    
                </div>
                    ))
                }
            </div>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default ManageProjects