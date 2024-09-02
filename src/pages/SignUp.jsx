import React from "react";
import { Welcome } from "../components/Welcome";
import logo from "../../public/comp-img/logo.svg";

export function SignUp() {
  return (
    <>
      <body className="signUpBody overflow-x-hidden w-[100%] h-[100%]">
        <section className="signUpSection section ">
          <main className="signUpMain">
            <img src={logo} alt="syncU logo" />
            <div>
              <Welcome />
            </div>
          </main>
        </section>
      </body>
    </>
  );
}
