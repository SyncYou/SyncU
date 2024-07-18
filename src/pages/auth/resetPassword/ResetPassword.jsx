import React, { useEffect, useState } from "react";
import tools from "../../../assets/img/tools-bg.png";
import logo from "../../../assets/img/Logo.png";
import padlock from "../../../assets/img/Icon.svg";
import { Spinner } from "../../../../helpers/Spinner.jsx";
import { Link } from "react-router-dom";
import checkmark from "../../../assets/img/checkmark.svg";
import { formatTime } from "../../../../utils/formatTime.js";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      console.log("hello world");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setTimer(30);
      setIsDisabled(true);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && isDisabled) {
      setIsDisabled(false);
    }

    return () => clearInterval(interval);
  }, [timer, isDisabled]);

  return (
    <main className="relative flex items-center justify-center flex-col gap-[32px] h-screen">
      <img
        src={tools}
        alt=""
        className="absolute z-[-1] inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex items-center justify-center flex-col gap-[32px] h-full w-full">
        <figure>
          <img src={logo} alt="sync-u-logo" />
        </figure>
        <section className="w-[428px] flex  flex-col items-stretch gap-[24px]">
          <div className="flex items-center flex-col justify-center self-stretch rounded-[14px] pt-[24px] pb-[16px] bg-white auth-box-shadow">
            <div className="flex flex-col items-center w-full pb-[32px] border-b border-[#D1D5DB] ">
              <div className="w-[56px] text-[24px] tracking-[0.94px] flex items-center justify-center text-white bg-[#DBEAFE] h-[56px] rounded-full ">
                <img src={padlock} alt="padlock-img" />
              </div>
              <div className="flex items-center flex-col w-[332px] gap-[12px] mt-[12px]">
                <h1 className="text-center text-[28px] font-semibold leading-[1.2] self-stretch text-neutral-900">
                  Reset password
                </h1>
                <p className="text-center text-[16px] self-stretch text-[#374151] font-normal leading-[24px]">
                  Enter your email address to receive a password reset link.
                </p>
              </div>
            </div>
            <form className="flex flex-col mt-[16px] items-center gap-[8px] self-stretch px-12 pt-0">
              <label
                htmlFor="email"
                className="text-[#1f2937] text-[16px] font-normal leading-[24px] self-stretch"
              >
                Email
              </label>
              <div className="flex flex-col items-start flex-1 self-stretch relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="johndoe@gmail.com"
                  value={email || ""}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex h-[39px] flex-col outline-none justify-between focus:border-[1px] focus:border-[#1F2937] bg-[#F9FAFB] px-[12px] items-start self-stretch rounded-[8px] border border-solid border-[#E8D8FC]"
                />
                <div className="">
                  <img
                    src={checkmark}
                    alt="checkmark"
                    className="absolute top-2 hidden right-0 pr-[12px]"
                  />
                </div>
              </div>
            </form>
            <div className="flex px-12 mt-[16px] py-4 justify-between items-start self-stretch border-t border-neutral-300">
              <Link to="/signIn">
                <button className="flex w-[125px] h-[39px] p-[10px] px-[12px] justify-center items-center gap-[8px] rounded-[8px] border-[1.5px] border-neutral-200 bg-white">
                  Back
                </button>
              </Link>
              <button
                onClick={handleSubmit}
                disabled={!email || isDisabled}
                className={`flex text-white w-[125px] h-[39px] p-[10px] px-[12px] ${
                  !email || isDisabled ? "bg-[#9CA3AF]" : "bg-[#672A9F]"
                } justify-center items-center gap-[8px] rounded-[8px] `}
              >
                {loading ? (
                  <Spinner />
                ) : isDisabled ? (
                  ` ${formatTime(timer)}`
                ) : (
                  "Send link"
                )}
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ResetPassword;
