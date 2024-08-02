import React from 'react'
import { Circles } from './Circles'

export function YourCheckMark() {
    return (
      <>
      <Circles
                arrowClName="arrow" allCircle="allCircle"

                currentCircle1="currentCircle"
                currentCircle2=""
                currentCircle3=""
                currentCircle4=""

                activeArrow1='text-or'
                activeArrow2='text-or'
                activeArrow3='text-or'

                mark1={1}
                mark2={2}
                mark3={3}
                mark4={4}
              
              />
        </>
  )
}
