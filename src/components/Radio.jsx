import React from 'react';

export  function Radio({stack, emoji, brief}) {
  return (
      <>
           <label className='flex items-start justify-between text-left py-[15px] px-[24px] border-2 border-hr rounded-xl w-full has-[:checked]:border-changeColor '>
                    
                    <div>
              
                        <strong className='text-darkBlue text-xl leading-[40px] pd-[5px]'> {emoji} {stack} </strong>
                  <p className='text-or font-normal'>{brief}</p>
              
                    </div>
              
                    <input type="radio" name="design" id="" className='border-changeColor bg-changeColor' />
              
                </label>
      </>
  )
}
