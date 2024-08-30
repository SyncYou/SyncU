import React from 'react'
import envelop from '../../public/comp-img/envelop.svg'
import mail from "../../public/comp-img/mail.svg"
import Buttons from './reuseable-comp/Buttons'
import logo from '../../public/comp-img/logo.svg';
import { Link } from 'react-router-dom';
import { PopUp } from './reuseable-comp/PopUp'

export function Verify() {
  return (
    <>
      <body className='signUpBody pb-[10%]'>
        <section className="signUpSection section ">
          <main className='signUpMain'>
            <img src={logo} alt="syncU logo" />
            <div>
              <PopUp />
              <form action="" className='form gap-[13px]' >
                <div className='flex flex-col gap-[10px] items-center'>
                  <img src={envelop} alt="" className='imgIcon' />
                  <h2 className='welcome'>Verify your email</h2>
                </div>
                <div className='divhr'>
                  <p className='text-h4 font-medium text-base '>We will send an mail to User123@gmail.com, check your inbox and click on the link “verify your email” button link. </p>
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
