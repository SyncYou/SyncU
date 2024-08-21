import React from 'react';
import googleImg from './imgs/comp-img/google.svg';
import facebookImg from './imgs/comp-img/facebook.svg';
import githubImg from './imgs/comp-img/github.svg';
import { useState } from 'react';
import Buttons from './reuseable-comp/Buttons';
import { Input } from './Input';
import { Link } from 'react-router-dom';


export function Welcome() {

  // state for input
  const [inputValue, setInputValue] = useState(" ");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());

  }
  const inputChange = (change) => {
    const value = change.target.value;
    setInputValue(value);
    setIsValidEmail(validateEmail(value));
  };

  const handleButtonClick = () => {
    if (isValidEmail) {
      setIsLoading(true);

      //timeout 
      setTimeout(() => {
        setIsLoading(false);
        alert('EMail confirmed')
      }, 9000);
    }
  };




  return (

    <>

      <form action="" className='form'>
        <div className='pb-[24px]'>

          <h2 className='welcome'>Welcome</h2>


          <h4 className="font-normal leading-10 text-[16px] text-h4" >Let’s get you started!</h4>
        </div>

        <div className='divhr'>

          <div className="text-[16px] font-medium leading-6 text-h4 flex flex-col gap-[10px] justify-center items-center w-full ">

            <Buttons bIcon={googleImg} bName={"Google"} bText="Continue with" bg="var(--Neutral-n-white, #FFF)" />
            <Buttons bIcon={facebookImg} bName={"Facebook"} bText="Continue with" bg="var(--Neutral-n-white, #FFF)" />
            <Buttons bIcon={githubImg} bName={"Github"} bText="Continue with" bg="var(--Neutral-n-white, #FFF)" />

          </div>

          <div className='flex justify-center items-center gap-[10px] w-full text-[14px] font-medium text-or leading-5'>
            <hr className='hr' />
            <p > OR  </p>
            <hr className='hr' />
          </div>


          <div className='flex flex-col items-start gap-[10px]'>
            <label htmlFor="email" className=" text-label font-medium text-base">Email</label>

            <div className='w-full flex items-center gap-0'>
              <Input value={inputValue} onChange={inputChange} placeHolder='Johndoe@gmail.com' type='email' />
              {isValidEmail && <span className='py-[0.5px] px-[4px] rounded-[50%] border-2 border-checkMark text-checkMark   text-[10px] ml-[-9vh]'>&#x2714;
              </span>}
            </div>

          </div>

        </div>

        <div className='px-[48px] w-full'>

          <Link to="/verify" >

            <button type='submit' className={`button ${inputValue ? 'active-button' : " "}`}
              onClick={handleButtonClick}
              disabled={!isValidEmail}>

              {isLoading ? <span className='w-[16px] h-[16px] border-2 border-t-transparent rounded-[50%] anim '></span> : `Continue with email`}
            </button>

          </Link>
        </div>
      </form>

      <p className='text-[14px] tracking-[0.14px] leading-5 text-or'>
        By proceeding, you automatically agree to our <a href="/" className='a'>Terms of Service</a> and <a href="/" className='a'>Privacy Policy</a>
      </p>






      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor nobis blanditiis molestias excepturi qui velit a, officiis numquam beatae harum recusandae. Totam nostrum reiciendis, vero deleniti ad saepe ipsam accusamus.
      Quis voluptate veritatis eum porro minus, ex eligendi nemo ducimus dolores, nihil nam sit saepe! Nihil quidem modi, quos quis illo maxime minus tempore cupiditate cumque, doloribus est, perspiciatis quaerat!

    </>
  )
}
