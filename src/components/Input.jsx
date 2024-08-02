import React from 'react';

export function Input({value, onChange, placeHolder, type}) {
  return (
      <>
          <input type={type} name={type} id="" value={value} onChange={onChange} placeholder={placeHolder}  className='allInput btn' required />

      </>
  )
}
