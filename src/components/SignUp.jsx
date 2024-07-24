import React from 'react';
import { Welcome } from './Welcome';
import logo from './imgs/logo.svg';
import { Verify } from './Verify';
import Yourself from './Yourself';
import Work from './Work';
export function SignUp() {
  
  return (
    <>
      <body className=' py-[5%] pb-[20%] text-center font-figtree '>

        <section className="bg-no-repeat bg-center w-full p-[20%] relative">


        <main className='flex flex-col items-center gap-gap absolute top-[0px] left-[35%] right-[35%] w-[428px]'>
          <img src={logo} alt="syncU logo" />

          <div>
          <Welcome />
          
          </div>

          <div>
            <Verify />
          </div>

            <div>
              <Yourself />
            </div>
            
            <div>
            <Work />
            </div>
          </main>

          </section>
      </body>
    </>
  )
}
