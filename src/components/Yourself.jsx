import React, { useState } from 'react';
import contactIcon from "./imgs/comp-img/contactIcon.svg";
import logo from './imgs/comp-img/logo.svg';
import { Input } from './Input';
import { Link } from 'react-router-dom';
import { YourCheckMark } from './circles/YourCheckMark';

export function Yourself() {
  const [inputValue, setInputValue] = useState(" ");
  const [inputSelect1, setInputSelect1] = useState(" ")
  const [inputSelect2, setInputSelect2] = useState(" ")

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }
  function handleSelect1(e) {
    setInputSelect1(e.target.value)
  }
  function handleSelect2(e) {
    setInputSelect2(e.target.value)
  }
  function handleEnter(e) {
    if (e === "Enter") {
      e.preventDefault();
    }
  }
  const isFormValid = inputValue.trim() !== " " && inputSelect1 !== " " && inputSelect2 !== " ";

  return (
    <>
      <body className='signUpBody'>
        <section className="signUpSection section">
          <main className='signUpMain'>
            <img src={logo} alt="syncU logo" />
            <div>
              <YourCheckMark />
              <form action="" className='form gap-[13px]'>
                <div className='flex flex-col gap-[10px] items-center divhr'>
                  <img src={contactIcon} alt="" className='imgIcon' />
                  <h2 className='welcome'>Tell us about yourself.</h2>
                  <p className='text-h4 font-medium text-base '> This will make the experience more personalized for you.</p>
                </div>
                <div className='divhr'>
                  <div className='flex flex-col items-start gap-[10px] w-full'>
                    <label htmlFor="email" className=" text-label font-medium text-base">Full name</label>
                    <div className={`flex items-center gap-0 ${isFormValid ? "w-full" : "w-[105%]"}`}>
                      <Input onChange={handleChange} placeHolder={'John Doe'} type={'text'} />
                      {isFormValid ? <span className='py-[0.5px] px-[4px] rounded-[50%] border-2 border-checkMark text-checkMark   text-[10px] ml-[-9vh]'>&#x2714;</span> : ""}
                    </div>
                  </div>
                  <div className='flex flex-col items-start gap-[10px]'>
                    <label htmlFor="email" className=" text-label font-medium text-base">Gender</label>
                    <select name="gender" id="" className='btn text-left px-[12px] pr-[5em] text-email bg-input' value={inputSelect1} onChange={handleSelect1} onKeyDown={handleEnter}>
                      <option value="">Select any---</option>
                      <option value="male ">Male</option>
                      <option value="female ">Female</option>
                      <option value="custom ">Custom</option>
                    </select>
                  </div>
                  <div className='flex flex-col items-start gap-[10px]'>
                    <label htmlFor="email" className=" text-label font-medium text-base">Country</label>
                    <select name="gender" id="" className='btn text-left px-[12px] pr-[5em] text-email bg-input' value={inputSelect2} onChange={handleSelect2} onKeyDown={handleEnter}>
                      <option value="">Select any---</option>
                      <option value="nigeria">Nigeria</option>
                      <option value="ghana ">Ghana</option>
                      <option value="niger">Niger</option>
                    </select>
                  </div>
                </div>
                <div className='px-[48px] w-full'>
                  <Link to="/work">
                    <button className={`btn button ${isFormValid ? 'bg-changeColor' : {}} `} disabled={!isFormValid} onKeyDown={handleEnter}> Next → </button>
                  </Link>
                </div>
              </form>
            </div>
          </main>
        </section >
      </body >
    </>
  )
}
