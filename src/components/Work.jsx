import React, { useState } from 'react';
import work from "../../public/comp-img/work.svg"
import { Radio } from './reuseable-comp/Radio';
import { Link } from 'react-router-dom';
import logo from '../../public/comp-img/logo.svg';
import { WorkCheckMark } from './circles/WorkCheckMark';

export function Work() {
  const [currentSelected, setCurrentSelected] = useState(false)

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  }

  return (
    <>
      <body className='signUpBody'>
        <section className="signUpSection section">
          <main className='signUpMain w-[65%] left-[20%]'>
            <img src={logo} alt="syncU logo" />
            <WorkCheckMark />
            <div>
              <form action="" className='form gap-[13px]'>
                <div className='flex flex-col gap-[10px] items-center divhr'>
                  <img src={work} alt="work icon" className='imgIcon bg-orange' />
                  <h2 className='welcome'>What work do you do?</h2>
                  <p className='text-h4 font-medium text-base '>Select anyone below</p>
                </div>
                <section className='divhr'>
                  <Radio setCurrentSelected={setCurrentSelected} currentSelected={currentSelected} />
                </section>
                <div className='px-[48px] w-full flex items-center justify-between'>
                  <Link to="/yourself" >
                    <button className='btn button w-[125px] bg-fbg text-h4'> Back </button>
                  </Link>
                  <Link to='/stack'>
                    <button className={`btn button w-[125px]  ${currentSelected ? 'bg-changeColor' : "bg-fbg"}`} disabled={!currentSelected} onKeyDown={handleEnter}> Next → </button>
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
