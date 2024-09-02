import React, { useEffect, useState } from 'react'
import { Spinner } from './reuseable-comp/Spinner'
import { Skeleton } from './reuseable-comp/Skeleton'

export function Loader() {
   const [loader, setLoader] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setLoader(false)
      }, 3000);
   }, [])

   return <>
      <body className='signUpBody py-[0px] my-[0px] overflow-hidden'>
         <main className=" items-center h-screen justify-center ">
            {loader ? <Spinner /> : <Skeleton />}
         </main>
      </body>
   </>
}
