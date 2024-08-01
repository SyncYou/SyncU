import React from 'react'
import envelop from './imgs/envelop.svg'
import mail from "./imgs/mail.svg"
import Buttons from './Buttons'
import popMail from "./imgs/popMail.svg"
import x from "./imgs/x.svg"
import logo from './imgs/logo.svg';
import { Link } from 'react-router-dom';

// import { useState } from 'react'


export function Verify() {
    

    // const [timeout, setTimeout] = useState(false);


  return (

      <>
      
          <body className='signUpBody pb-[10%]'>
              <section className="signUpSection ">
                  <main className='signUpMain'>
                      <img src={logo} alt="syncU logo" />
                      <div>
                          <button className='flex bg-popUp btn gap-[3px] text-fbg justify-between rounded-xl px-[12px] mb-[5%]' >
                              <small className='flex items-center gap-[4px]'  > <img src={popMail} alt="pop mail" /> Email sent successfully!</small>
                              <small className='flex items-center gap-[4px]' >
                                  <hr className='h-[24px] bg-fbg w-[1px] opacity-[0.2] ' />
                                  <img src={x} alt="cancel" />
                              </small>
                          </button>
                          
                    <form action="" className='form gap-[13px]' >
                        <div className='flex flex-col gap-[10px] items-center'>
                                  <img src={envelop} alt="" className='imgIcon' />
                    <h2 className='welcome'>Verify your email</h2>
              </div>
              <div className='divhr'> 
                <p className='text-h4 font-medium text-base '>
              We will send an mail to User123@gmail.com, check your inbox and click on the link “verify your email” button link.
               </p>
                              </div>
                              <div className='px-[48px] w-full'>
                                  <Link to="/yourself">
                                      <Buttons bIcon={mail} bText='Send mail link' bg="var(--Primary-p-800, #672A9F)" text="var(--Neutral-n-white, #FFF)" />
                              </Link>
                              </div>
                          
                          </form>
               </div>
            
          </main>

        </section>
      </body>

         
      </>
  
  )
}
