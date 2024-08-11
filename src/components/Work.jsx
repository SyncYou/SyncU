import React, { useState } from 'react';
import work from "./imgs/comp-img/work.svg"
import { Radio } from './reuseable-comp/Radio';
import { Link } from 'react-router-dom';
import logo from './imgs/comp-img/logo.svg';
import { Input } from './Input';
import { WorkCheckMark } from './circles/WorkCheckMark';

export function Work() {

  const [show, setShow] = useState(false);
  const [isRadioSelected, setIsRadioSelected] = useState(false);

  function handleRadio() {
    setIsRadioSelected(true)
  }

  return (
      <>
    <body className='signUpBody'>

    <section className="signUpSection ">


      <main className='signUpMain w-[65%] left-[20%]'>
        <img src={logo} alt="syncU logo" />

            <div>
              
              <WorkCheckMark />
              

        <form action="" className='form gap-[13px]'>
         <div className='flex flex-col gap-[10px] items-center divhr'>
                  
              <img src={work} alt="work icon" className='imgIcon bg-orange' />
              <h2 className='welcome'>What work do you do?</h2>
               
                <p className='text-h4 font-medium text-base '>
                This is required to improve your experience.
                </p>
          </div>


    
              <section className='divhr'>
                  
                  <div className='flex flex-col items-start gap-[10px] z-10'>
                      
                   <Radio emoji='🎨' stack="Design" brief="Includes graphics design, UI/UX design and so on..." onChange={handleRadio}/>

                    <Radio emoji='⚙' stack="Engineering" brief="Includes web development, cloud engineering etc." onChange={handleRadio}/>
                    
                    <Radio emoji='💹' stack="Product" brief="Includes Product management, Product marketing etc." onChange={handleRadio} />
                  
                    <label className='label gap-[20px] flex-col' onClick={() => setShow(show === false ? {} : true)}>
                     
                      <div className='flex items-start justify-between w-full'>
                    <div>      
                      <strong className='text-darkBlue text-xl leading-[40px] pd-[5px]'>😬 Others</strong>
                      <p className='text-or font-normal'>Select If what you do is not among the above.</p>
                    </div>
                          
                        <input type="radio" name="design" id="" className='border-changeColor bg-changeColor' onChange={handleRadio} /> 
                      </div>
                      
                      { show && ( <div>  <Input /> </div>) }

                    </label>
                        </div>
                  
                </section>
              

              <div className='px-[48px] w-full flex items-center justify-between'>
                 
          <Link to="/yourself" >
          <button className='btn button w-[125px] bg-fbg text-h4'>
                  Back 
                  </button>
          </Link>

                 <Link to='/stack'>
                  <button className={`btn button w-[125px]  ${isRadioSelected ? 'bg-changeColor' : {}}`} disabled={!isRadioSelected}>
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
