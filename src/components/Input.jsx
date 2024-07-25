import React from 'react';

export function Input({value, onChange, placeHolder, type}) {
  return (
      <>
          <input type={type} name={type} id="" value={value} onChange={onChange} placeholder={placeHolder} className='btn bg-input placeholder:text-left pl-[10px] mr-[20px] relative' />

      </>
  )
}
