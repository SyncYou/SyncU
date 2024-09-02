import React, { useState } from "react";
import stackIcon from "../../public/comp-img/stack.svg";
import logo from "../../public/comp-img/logo.svg";
import search from "../../public/stack-img/search-01.svg";
import { Link } from "react-router-dom";
import { StackCheckMark } from "./circles/StackCheckMark";
import { StackOpt } from "./reuseable-comp/StackOpt";

export function Stack() {
  const [stack, setStack] = useState([]); //Track the selected items

  // Check if an item is already in the stack array
  function isInArray(item) {
    return stack.some((stackItem) => stackItem.id === item.id);
  }
  function handleStack(e, item) {
    e.preventDefault();
    // Prevents Adding more than one
    if (isInArray(item)) {
      const updatedStack = stack.filter(
        (stackItem) => stackItem.id !== item.id
      );
      setStack(updatedStack);
      //If the stack has less than 15 items, add the new item
    } else if (stack.length < 15) {
      setStack([...stack, { id: item.id, stack: item.stack, img: item.img }]);
    }
  }

  function handleEnter(e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  }
  const isValid = stack.length < 3;

  return (
    <>
      <body className="signUpBody">
        <section className="signUpSection section">
          <main className="signUpMain w-[50%] left-[25%] ">
            <img src={logo} alt="syncU logo" />
            <div>
              <StackCheckMark />
              <form action="" className="form gap-[13px]">
                <div className="flex flex-col gap-[10px] items-center divhr">
                  <img src={stackIcon} alt="stackIcon" className="imgIcon" />
                  <h2 className="welcome">
                    What are your interests/toolstacks?
                  </h2>
                  <p className="text-h4 font-medium text-base ">
                    {" "}
                    This will make for a more personalized experience.{" "}
                  </p>
                </div>
                <div className="divhr">
                  <div className="flex rounded-lg border-2 border-fb pl-[9px] ">
                    <button type="button" className="">
                      <img src={search} alt="search Icon" />
                    </button>
                    <input
                      type="search"
                      name="stack"
                      id=""
                      className="btn border-0 text-left py-[7px] px-[20px] focus:outline-none"
                      placeholder="Search for skills, tools and stacks..."
                      onKeyDown={handleEnter}
                    />
                  </div>
                  <div className="flex flex-col gap-[16px]">
                    <p className="flex justify-between font-normal text-or">
                      <span> Pick atleast 3 or a maximum of 15 </span>
                      <span>
                        {" "}
                        <b className="text-h4">
                          {stack !== null ? stack.length : {}}
                        </b>
                        /15{" "}
                      </span>
                    </p>
                    <StackOpt handleStack={handleStack} isInArray={isInArray} />
                  </div>
                </div>
                <div className="px-[48px] w-full flex items-center justify-between">
                  <Link to="/work">
                    <button
                      className="btn button w-[125px] bg-fbg text-h4"
                      onKeyDown={handleEnter}
                    >
                      Back
                    </button>
                  </Link>
                  <Link to="/security">
                    <button
                      className={`btn button w-[125px] ${
                        stack.length >= 3 ? "bg-changeColor text-fbg" : " "
                      }`}
                      disabled={isValid}
                      onKeyDown={handleEnter}
                    >
                      Next →
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </main>
        </section>
      </body>
    </>
  );
}
