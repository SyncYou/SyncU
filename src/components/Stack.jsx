import React, { useState } from 'react';
import stackIcon from "./imgs/comp-img/stack.svg";
import logo from './imgs/comp-img/logo.svg';
import search from "./imgs/stack-img/search-01.svg"
import { Link } from 'react-router-dom';
import { StackCheckMark } from './circles/StackCheckMark';
import { StackOpt } from './reuseable-comp/StackOpt';

export function Stack() {
  const [stack, setStack] = useState([]) //Track the selected items


  // Check if an item is already in the stack array
  function isInArray(item) {
    return stack.some(stackItem => stackItem.id === item.id);

  }


  function handleStack(e, item) {
    e.preventDefault();

    // Prevents Adding more than one
    if (stack.length === 15) {
      return
    }
    console.log(stack)

    // Adds new item if it's not in the stack
    if (!isInArray(item)) {
      setStack([...stack, { id: item.id, stack: item.stack, img: item.img }]);
    } else {
      // Remove the item from the stack if it is already in it
      const updatedStack = stack.filter(stackItem => stackItem.id !== item.id);
      setStack(updatedStack);
    }

  }



  return (
    <>
      <body className='signUpBody'>

        <section className="signUpSection">


          <main className='signUpMain w-[50%] left-[25%] '>
            <img src={logo} alt="syncU logo" />

            <div>

              <StackCheckMark />

              <form action="" className='form gap-[13px]'>

                <div className='flex flex-col gap-[10px] items-center divhr'>

                  <img src={stackIcon} alt="stackIcon" className='imgIcon' />
                  <h2 className='welcome'>What are your interests/toolstacks?</h2>

                  <p className='text-h4 font-medium text-base '>
                    This will make for a more personalized experience.
                  </p>
                </div>



                <div className='divhr'>
                  <div className='flex relative'>
                    <img src={search} alt="search Icon" className='absolute' />
                    <input type="search" name="stack" id="" className='btn text-left py-[7px] px-[20px] focus-none ' placeholder='Search for skills, tools and stacks...' />
                  </div>

                  <div className='flex flex-col gap-[16px]'>

                    <p className='flex justify-between font-normal text-or'>

                      <span> Pick atleast 3 or a maximum of 15 </span>

                      <span> <b className='text-h4'>{stack !== null ? stack.length : {}}</b>/15 </span>
                    </p>

                    <StackOpt handleStack={handleStack} isInArray={isInArray} />

                  </div>
                </div>



                <div className='px-[48px] w-full flex items-center justify-between'>

                  <Link to="/work">
                    <button className='btn button w-[125px] bg-fbg text-h4'>
                      Back
                    </button>
                  </Link>

                  <Link to=''>
                    <button className='btn button w-[125px]' >
                      Next →
                    </button>
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
