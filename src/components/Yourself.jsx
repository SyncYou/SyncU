import React from 'react';
import { Input } from './Input';
import contactIcon from "./imgs/contactIcon.svg";
import logo from './imgs/logo.svg';
import { Link } from 'react-router-dom';

export function Yourself() {
  return (
      <>
          <body className='signUpBody'>

<section className="signUpSection ">


  <main className='signUpMain'>
    <img src={logo} alt="syncU logo" />

                <div>

                      <div className='text-xs font-semibold text-or justify-center flex items-center gap-[8px] mb-[30px]'>
              <span className='allCircle currentCircle'>1</span>
              <b className='arrow'>→</b>
              <span className='allCircle'>2</span>
              <b className='arrow'>→</b>
              <span className='allCircle'>3</span>
              <b className='arrow'>→</b>
              <span className='allCircle'>4</span>
          </div>


        <form action="" className='form gap-[13px]'>
         <div className='flex flex-col gap-[10px] items-center divhr'>
                  
              <img src={contactIcon} alt="" className='imgIcon' />
              <h2 className='welcome'>Tell us about yourself.</h2>
               
                <p className='text-h4 font-medium text-base '>
                This will make the experience more personalized for you.
                </p>
          </div>


    
              <div className='divhr'>
                  
                  <div className='flex flex-col items-start gap-[10px]'>
                      <label htmlFor="email" className=" text-label font-medium text-base">Full name</label>
                  <Input placeHolder='John Doe' type='text' />
                  </div>
                  
                  <div className='flex flex-col items-start gap-[10px]'>
                      <label htmlFor="email" className=" text-label font-medium text-base">Gender</label>
                      <select name="gender" id="" className='btn text-left px-[12px] pr-[5em] text-email bg-input' >
                          <option value="">Select any---</option>
                          <option value="male ">Male</option>
                          <option value="female ">Female</option>
                          <option value="custom ">Custom</option>
                      </select>
                      
                  </div>
                  
                  <div className='flex flex-col items-start gap-[10px]'>
                      <label htmlFor="email" className=" text-label font-medium text-base">Country</label>
                      <select name="gender" id="" className='btn text-left px-[12px] pr-[5em] text-email bg-input' >
                          <option value="">Select any---</option>
                          <option value="male ">Male</option>
                          <option value="female ">Female</option>
                          <option value="custom ">Custom</option>
                      </select>
                      
                  </div>
                  
                </div>
              

              <div className='px-[48px] w-full'>
                                  <Link to="/work">   
                                   <button className='btn button  '> Next → </button>
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
