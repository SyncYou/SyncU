import React from "react";
import behance from "/requestersImg/behance.png";
import dribble from "/requestersImg/dribble.svg";
import lady from "/requestersImg/lady.svg";
import { Portfolio } from "./Portfolio";
export function Right() {
  return (
    <>
      <section className="w-[68%] flex flex-col items-start gap-4">
        <div className="flex flex-col flex-start gap-2 py-4 border border-solid border-gray-200 shadow-subtle rounded-2xl px-4">
          <p className="text-gray-950 font-semibold">Skills or stacks</p>
          <div className="flex items-start self-stretch flex-wrap gap-4 py-[10px] [&_p]:py-1 [&_p]:px-3 [&_p]:rounded-3xl [&_p]:border [&_p]:border-solid [&_p]:border-gray-300 ">
            <p>Framer</p>
            <p>Ui design</p>
            <p>UX design</p>
            <p>User research</p>
            <p>CSS3</p>
            <p>Web-flow</p>
            <p>Html</p>
            <p>Web-flow</p>
            <p>UX design</p>
            <p>Ui design</p>
          </div>
        </div>

        <div className="flex flex-col flex-start gap-2 py-4 border border-solid border-gray-200 shadow-subtle rounded-2xl px-4">
          <p className="text-gray-950 font-semibold">
            Portfolio or social links
          </p>
          <div className="flex w-full items-start self-stretch flex-wrap gap-[10px] py-2 scrollbar-none overflow-y-scroll h-screen pb-[100vh]">
            <Portfolio
              img1={behance}
              img2={lady}
              social="Behance"
              link="behance.com/juliedesigns"
            />
            <Portfolio
              img1={dribble}
              img2={lady}
              social="Dribble"
              link="dribble.com/juliedesigns"
            />
            <Portfolio
              img1={behance}
              img2={lady}
              social="Behance"
              link="behance.com/juliedesigns"
            />
            <Portfolio
              img1={dribble}
              img2={lady}
              social="Dribble"
              link="dribble.com/juliedesigns"
            />
            <Portfolio
              img1={behance}
              img2={lady}
              social="Behance"
              link="behance.com/juliedesigns"
            />
          </div>
        </div>
      </section>
    </>
  );
}
