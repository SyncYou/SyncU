import React, { useState } from 'react';
import { Stack } from "./Stacks";



export function StackOpt({ handleStack, isInArray }) {

  return (

    <>
      <ul className="stack stack-scrollbar">
        {Stack.map((item) => (<button key={item.id} onClick={(e) => handleStack(e, item)} className={`${isInArray(item) ? 'bg-label text-fbg' : {}} `}>
          {item.img ? <img src={item.img} alt={item.stack} /> : null}
          {item.stack} <small className={`${isInArray(item) ? ' border-0  text-[27px] font-thin' : "px-[2px] py-[0px] text-darkBlue border border-email rounded-[50%] pt-[1px] leading-none"} `}>
            {isInArray(item) ? <b>&times;</b> : <b>&#43;</b>}
          </small>
        </button>))}
      </ul>
    </>
  )
}
