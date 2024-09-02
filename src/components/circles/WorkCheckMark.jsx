import React from 'react'
import { Circles } from './Circles'

export function WorkCheckMark() {
  return (

    <>
      <Circles
        arrowClName="arrow"
        allCircle="allCircle"

        currentCircle1="circles px-[10px]"
        currentCircle2="currentCircle "
        currentCircle3=""
        currentCircle4=""

        activeArrow1='text-changeColor'
        activeArrow2=''
        activeArrow3=''
        activeArrow4=''

        mark1='&#x2714;'
        mark2={2}
        mark3={3}
        mark4={4}
      />
    </>

  )
}
