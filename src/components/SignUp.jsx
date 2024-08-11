import React from 'react';
import { Welcome } from './Welcome';
import logo from './imgs/comp-img/logo.svg';

export function SignUp() {
  
  return (
    <>
      <body className='signUpBody'>

        <section className="signUpSection ">


          <main className='signUpMain'>
            <img src={logo} alt="syncU logo" />

            <div>
              <Welcome />
            </div>
            
          </main>

        </section>
      </body>
    </>
  )
}