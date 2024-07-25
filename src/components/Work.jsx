import React from 'react';
import work from "./imgs/work.svg"
import { Radio } from './Radio';

export default function Work() {
  return (
      <>
          <div className='text-xs font-semibold text-or justify-center flex items-center gap-[8px] mb-[30px]'>
              <span className='allCircle currentCircle'>1</span>
              <b className='arrow'>→</b>
              <span className='allCircle'>2</span>
              <b className='arrow'>→</b>
              <span className='allCircle'>3</span>
              <b className='arrow'>→</b>
              <span className='allCircle'>4</span>
          </div>


        <form action="" className='form gap-[13px] w-[585px]'>
         <div className='flex flex-col gap-[10px] items-center divhr'>
                  
              <img src={work} alt="work icon" className='imgIcon bg-orange' />
              <h2 className='welcome'>What work do you do?</h2>
               
                <p className='text-h4 font-medium text-base '>
                This is required to improve your experience.
                </p>
          </div>


    
              <section className='divhr'>
                  
                  <div className='flex flex-col items-start gap-[10px]'>
                      
                   <Radio emoji='🎨' stack="Design" brief="Includes graphics design, UI/UX design and so on..." />
                   <Radio emoji='⚙' stack="Engineering" brief="Includes web development, cloud engineering etc." />
                   <Radio emoji='💹' stack="Product" brief="Includes Product management, Product marketing etc." />
                   <Radio emoji='😬' stack="Others" brief="Select If what you do is not among the above." />
                  </div>
                  
                </section>
              

              <div className='px-[48px] w-full flex items-center justify-between'>
                 
                  <button className='btn button w-[125px] bg-fbg text-h4'>
                  Back 
                  </button>

                  <button className='btn button w-[125px]'>
                  Next →
                  </button>
              </div>
     </form>

      
      </>
)
}
