import React from 'react';

export function Radio({ stack, emoji, brief, onChange }) {
  
  return (
    <>
      <label className='label'>
                    
        <div>      
          <strong className='text-darkBlue text-xl leading-[40px] pd-[5px]'> {emoji} {stack} </strong>
          <p className='text-or font-normal'>{brief}</p>
        </div>
              
        <input type="radio" name="design" id="" className='border-changeColor bg-changeColor' onChange={onChange} />
       
        </label>
    </>
  );
}
