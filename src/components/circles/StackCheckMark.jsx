import React from "react";
import { Circles } from "./Circles";

export function StackCheckMark() {
  return (
    <>
      <Circles
        arrowClName="arrow"
        allCircle="allCircle"
        currentCircle1="bg-changeColor circles"
        currentCircle2="currentCircle circles"
        currentCircle3="currentCircle"
        currentCircle4=""
        activeArrow1="text-changeColor"
        activeArrow2="text-changeColor"
        activeArrow3=""
        activeArrow4=""
        mark1="&#x2714;"
        mark2="&#x2714;"
        mark3={3}
        mark4={4}
      />
    </>
  );
}
