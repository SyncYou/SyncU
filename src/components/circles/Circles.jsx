import React from 'react'

export function Circles({ arrowClName, allCircle, currentCircle1, currentCircle2, currentCircle3, currentCircle4, activeArrow1, activeArrow2, activeArrow3, mark1, mark2, mark3, mark4 }) {
  return (
    <>
      <div className='text-xs font-semibold text-or justify-center flex items-center gap-[8px] mb-[30px]'>
        <span className={`${allCircle} ${currentCircle1}`}>{mark1}</span>
        <b className={`${arrowClName} ${activeArrow1}`}>→</b>
        <span className={`${allCircle} ${currentCircle2}`}>{mark2}</span>
        <b className={`${arrowClName} ${activeArrow2}`}>→</b>
        <span className={`${allCircle} ${currentCircle3}`}>{mark3}</span>
        <b className={`${arrowClName} ${activeArrow3}`}>→</b>
        <span className={`${allCircle} ${currentCircle4}`}>{mark4}</span>
      </div>
    </>
  )
}
