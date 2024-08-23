import React from 'react'
import { Circles } from './Circles'

export function SecurityCheckMark() {
    return (

        <>
            <Circles
                arrowClName="arrow"
                allCircle="allCircle"

                currentCircle1="bg-changeColor circles px-[10px]"
                currentCircle2="currentCircle circles px-[10px]"
                currentCircle3="currentCircle circles px-[10px]"
                currentCircle4="currentCircle"

                activeArrow1='text-changeColor'
                activeArrow2='text-changeColor'
                activeArrow3='text-changeColor'
                activeArrow4=''

                mark1='&#x2714;'
                mark2='&#x2714;'
                mark3='&#x2714;'
                mark4={4}
            />
        </>

    )
}
