import React, { useState } from 'react';
import contactIcon from "./imgs/contactIcon.svg";
import logo from './imgs/logo.svg';
import { Link } from 'react-router-dom';
import { Input } from './Input';
import { YourCheckMark } from './circles/YourCheckMark';

export function Yourself() {
  const [inputValue, setInputValue] = useState("John Doe");
  const [inputSelect1, setInputSelect1] = useState(" ")
  const [inputSelect2, setInputSelect2] = useState(" ")
  
  function handleInput(e) {
    setInputValue(e.target.value)
  }
  function handleSelect1(e) {
    setInputSelect1(e.target.value)
  }
  function handleSelect2(e) {
    setInputSelect2(e.target.value)
  }

  const isFormValid = inputValue.trim() !== " " && inputSelect1 !== " " && inputSelect2 !== " ";

  return (
      <>
          <body className='signUpBody'>

<section className="signUpSection ">


  <main className='signUpMain'>
    <img src={logo} alt="syncU logo" />

                <div>
            
              <YourCheckMark />
              
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
                    
                  <Input placeHolder={"John Doe"} onChange={handleInput} value={inputValue}/>
                   
                  </div>
                  
                  <div className='flex flex-col items-start gap-[10px]'>
                      <label htmlFor="email" className=" text-label font-medium text-base">Gender</label>
                      <select name="gender" id="" className='btn text-left px-[12px] pr-[5em] text-email bg-input' value={inputSelect1} onChange={handleSelect1}>
                          <option value="">Select any---</option>
                          <option value="male ">Male</option>
                          <option value="female ">Female</option>
                          <option value="custom ">Custom</option>
                      </select>
                      
                  </div>
                  
                  <div className='flex flex-col items-start gap-[10px]'>
                    <label htmlFor="email" className=" text-label font-medium text-base">Country</label>
                    
                      <select name="gender" id="" className='btn text-left px-[12px] pr-[5em] text-email bg-input' value={inputSelect2} onChange={handleSelect2}>
                          <option value="">Select any---</option>
                          <option value="nigeria">Nigeria</option>
                          <option value="ghana ">Ghana</option>
                          <option value="niger">Niger</option>
                      </select>
                      
                  </div>
                  
                </div>
              

              <div className='px-[48px] w-full'>
                                  <Link to="/work">   
                    <button className={`btn button ${isFormValid ? 'bg-changeColor' : {} } `} disabled={!isFormValid}> Next → </button>
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
