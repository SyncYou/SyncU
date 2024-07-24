import React from 'react';
import Input from './Input'
import work from "./imgs/work.svg"

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
                      
                     <label className='flex items-start justify-between text-left py-[15px] px-[24px] border-2 border-hr rounded-xl w-full '>
                    
                          <div>
                    
                              <strong className='text-darkBlue text-xl leading-[40px] pd-[5px]'>🎨 Design</strong>
                              <p className='text-or font-normal'>Includes graphics design, UI/UX design and so on...</p>
                    
                          </div>
                    
                          <input type="radio" name="design" id="" className='' />
                    
                      </label>

                     <label className='flex items-start justify-between text-left py-[15px] px-[24px] border-2 border-hr rounded-xl w-full '>
                    
                          <div>
                    
                              <strong className='text-darkBlue text-xl leading-[40px] pd-[5px]'> ⚙ Engineering</strong>
                              <p className='text-or font-normal'>Includes web development, cloud engineering etc.</p>
                    
                          </div>
                    
                          <input type="radio" name="design" id="" className='' />
                    
                      </label>
                     <label className='flex items-start justify-between text-left py-[15px] px-[24px] border-2 border-hr rounded-xl w-full '>
                    
                          <div>
                    
                              <strong className='text-darkBlue text-xl leading-[40px] pd-[5px]'>💹 Product</strong>
                              <p className='text-or font-normal'>Includes Product management, Product marketing etc.</p>
                    
                          </div>
                    
                          <input type="radio" name="design" id="" className='' />
                    
                      </label>
                     <label className='flex items-start justify-between text-left py-[15px] px-[24px] border-2 border-hr rounded-xl w-full '>
                    
                          <div>
                    
                              <strong className='text-darkBlue text-xl leading-[40px] pd-[5px]'>😬 Others </strong>
                              <p className='text-or font-normal'>Select If what you do is not among the above.</p>
                    
                          </div>
                    
                          <input type="radio" name="design" id="" className='' />
                    
                      </label>
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
