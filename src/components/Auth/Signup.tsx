import React from "react";
import Header from "../Reuseables/Header";
import Google from "/google.svg";
import github from "/github.svg";

const Signup: React.FC = () => {
  return (
    <section className="p-5 md:p-2 w-full">
      <div>
        <Header />
      </div>

      <div className="max-w-[400px] mx-auto">
        <div className="flex flex-col items-center mt-20 md:mt-10 md:mb-7">
          <h1 className="font-semibold text-[28px] leading-[32px] text-center text-secondary">
            Welcome 👋{" "}
          </h1>
          <h1 className="font-semibold text-[28px] leading-[32px] text-center text-secondary">
            {" "}
            sign up or login
          </h1>
        </div>

        <div className="my-10 space-y-5 md:space-y-3 md:my-5">
          <div className="flex items-center gap-5 justify-center border border-light rounded-full p-4 md:p-3">
            <img src={Google} alt="google" />
            <p className="text-secondary font-medium text-[18px] leading-6 text-center">
              continue with Google
            </p>
          </div>
          <div className="flex items-center gap-5 justify-center border border-light rounded-full p-4 md:p-3">
            <img src={github} alt="google" />
            <p className="text-secondary font-medium text-[18px] leading-6 text-center">
              continue with Github
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 justify-between">
          <hr className="w-full bg-[#E6E6F0]" />
          <small className="text-nowrap text-[#5C5C66] text-[14px] leading-5 text-center">
            or use
          </small>
          <hr className="w-full bg-[#E6E6F0]" />
        </div>

        <form className="my-10 md:my-5">
          <div className="border border-[#E6E6F0] rounded-xl py-2 px-3 flex flex-col gap-2 focus:border focus:border-primary focus:shadow focus:shadow-[#EDE4FA]">
            <label
              className="text-secondary leading-6 text-[16px] font-normal"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="focus:outline-none"
              name="email"
              type="email"
              placeholder="Enter your email..."
            />
          </div>
          <div className="flex items-center justify-center w-full my-5 md:my-4">
            <button
              disabled={true}
              className="text-[#ffffff] w-full py-3 px-5 rounded-full text-center leading-6 font-medium bg-secondary disabled:border disabled:border-[#E6E6F0] disabled:bg-[#F5F5FA] disabled:text-gray"
            >
              continue with email
            </button>
          </div>
          <div className="flex items-center gap-5 w-full">
            <input type="checkbox" name="check" />
            <label
              className="text-[#73737F] text-[14px] leading-5 flex-1"
              htmlFor="check"
            >
              I agree to receive updates, promotions, and marketing emails.
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
