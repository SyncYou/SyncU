import React from 'react';
import { Welcome } from './Welcome';
import logo from '../../public/comp-img/logo.svg';

export function SignUp() {

  return (
    <>
      <body className='signUpBody'>
        <section className="signUpSection section ">
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