import React, { useState } from 'react';
import { Stack } from "./Stacks";


export function StackOpt({ handleStack, click }) {
  
  // const [click, setClick] = useState(true)

  // function handleClick(e) {
  //   e.preventDefault();
  //   setClick(!click);
  // }
  
  return (

      <>
             <ul className="stack stack-scrollbar"> 
        {Stack.map((e) => (<button key={e.id} onClick={handleStack}>
                    {e.img ? <img src={e.img} alt={e.stack} /> : null}
          {e.stack} <small className="px-[2px] py-[0px] text-darkBlue border border-email rounded-[50%] pt-[1px] leading-none">
            {click ? <b>+</b> : <b>&minus;</b>
            }
                  </small>
                </button>))}
                </ul>   
      </>
)
}
