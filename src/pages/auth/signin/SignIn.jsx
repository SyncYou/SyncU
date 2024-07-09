import React, { useState } from "react";
import logo from "../../../assets/img/Logo.png";
import { Link } from "react-router-dom";
import tools from "../../../assets/img/tools-bg.png";
import SignInButtons from "./SignInButtons";

// The sign-in page
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(email);
  return (
    <main className="relative flex items-center justify-center flex-col gap-[32px] h-screen">
      {/* Background image positioned absolutely */}
      <img
        src={tools}
        alt=""
        className="absolute inset-0 z-[-1] w-full h-full object-cover"
      />

      {/* Content with relative positioning to ensure it's above the background */}
      <div className="relative z-10 flex items-center justify-center flex-col gap-[32px] h-full w-full">
        <figure>
          <img src={logo} alt="sync-U-logo" />
        </figure>

        <section className="w-[428px] flex flex-col items-stretch gap-[24px]">
          <form
            className="flex pt-[24px] pb-[16px] px-0 w-full flex-col justify-center items-center 
            self-stretch rounded-[16px] auth-box-shadow bg-white"
          >
            <div className="flex flex-col justify-center items-center self-stretch px-12 pb-8 gap-2">
              <h1 className="text-[#111827] text-[28px] font-semibold leading-[1.2]">
                Welcome
              </h1>
              <p className="text-[#374151] text-[16px] font-regular leading-[24px]">
                Let's get you started!
              </p>
            </div>
            <div className="flex px-12 flex-col items-center gap-6 self-stretch">
              <SignInButtons />
              <div className="flex justify-center items-center gap-2.5 self-stretch">
                <hr className="w-[146px] h-[1px] bg-[#e5e7eb]" />
                <p className="text-[#6B7280] text-[14px] leading-[21px] font-normal">
                  OR
                </p>
                <hr className="w-[146px] h-[1px] bg-[#e5e7eb]" />
              </div>

              <div className="flex h-[71px] mb-[16px] flex-col items-start gap-2 self-stretch">
                <label
                  htmlFor="email"
                  className="text-[#1f2937] text-[16px] font-normal leading-[24px] self-stretch"
                >
                  Email
                </label>
                <div className="flex flex-col items-start flex-1 self-stretch">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email || ""}
                    placeholder="Johndoe@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex h-[39px] flex-col outline-none justify-between focus:border-[1px] focus:border-[#a45fed] bg-[#F9FAFB] px-[12px] items-start self-stretch rounded-[8px] border border-solid border-[#E8D8FC]"
                  />
                </div>
              </div>
            </div>
            <div className="flex py-4 px-12 flex-col justify-center items-center gap-2.5 self-stretch border-t border-gray-300">
              <button
                disabled={!email}
                type="submit"
                className={`flex h-[39px] py-2.5 px-3 justify-center text-white items-center gap-2 self-stretch rounded-lg ${
                  email ? "bg-[#672A9F]" : "bg-[#9CA3AF]"
                }`}
              >
                Continue with email
              </button>
            </div>
          </form>
          <p className="self-stretch text-center text-[14px] font-normal leading-[21px] tracking-[0.14px] text-[#6B7280] text-opacity-40">
            By proceeding, you automatically agree to our <br />
            <span className="underline text-[#1f2937] text-opacity-100">
              Terms of service
            </span>{" "}
            and{" "}
            <span className="underline text-[#1f2937] text-opacity-100">
              Privacy Policy
            </span>
          </p>
        </section>
      </div>
    </main>
  );
};

export default SignIn;
