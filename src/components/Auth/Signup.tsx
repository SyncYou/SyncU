import React from "react";
import Header from "../Reuseables/Header";
import Google from "/google.svg";
import github from "/github.svg";
import { LuMail } from "react-icons/lu";
import ControlledInput from "../Reuseables/ControlledInput";
import SocialButton from "../Reuseables/SocialButton";
import ControlledButton from "../Reuseables/ControlledButton";
import { Loading } from "../Reuseables/Loading";
import { useSignup } from "../../hooks/useSignup";

const Signup: React.FC = () => {
  // Custom hook for hanlding the logic
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    disable,
    handleSignup,
  } = useSignup();

  return (
    <>
      <section className="p-5 md:p-2 w-full h-full grid grid-rows-[3rem_auto]">
        <div>
          <Header />
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="max-w-[400px] mx-auto max-h-[30rem]">
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
              <SocialButton icon={Google} label="continue with Google" />
              <SocialButton icon={github} label="continue with Github" />
            </div>

            <div className="flex items-center gap-3 justify-between">
              <hr className="w-full bg-[#E6E6F0]" />
              <small className="text-nowrap text-[#5C5C66] text-[14px] leading-5 text-center">
                or use
              </small>
              <hr className="w-full bg-[#E6E6F0]" />
            </div>

            <form
              onSubmit={handleSubmit(handleSignup)}
              className="my-10 md:my-5"
            >
              <ControlledInput
                name="email"
                type="email"
                placeholder="Enter your email..."
                label="Email"
                register={register}
                errors={errors}
              />
              <div className="flex items-center justify-center w-full my-5 md:my-4">
                <ControlledButton
                  disable={disable}
                  icon={LuMail}
                  label="continue with email"
                />
              </div>
              <div className="flex items-center gap-5 w-full">
                <label className="relative flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="check"
                    className="peer appearance-none border border-[#D5D7DA] w-4 h-4 rounded-[0.3rem] 
                              focus:outline-none cursor-pointer checked:border-[#7F56D9] checked:bg-transparent"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-[#7F56D9] text-sm invisible peer-checked:visible">
                    ✔
                  </span>
                </label>

                <label
                  className="text-[#73737F] text-[14px] leading-5 flex-1"
                  htmlFor="check"
                >
                  I agree to receive updates, promotions, and marketing emails.
                </label>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Loading UI */}
      {isSubmitting && <Loading />}
    </>
  );
};

export default Signup;
