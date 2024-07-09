import { useState } from "react";
import logo from "../../../assets/img/Logo.png";
import tools from "../../../assets/img/tools-bg.png";
import { Link } from "react-router-dom";
import visible from "../../../assets/img/visible.svg";
import { Spinner } from "../../../../helpers/Spinner.jsx";

const Password = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // try catch and async function
    try {
      setLoading(true);
      console.log("hello world");
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

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
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-[64px] text-[24px] tracking-[0.94px] flex    items-center justify-center text-white bg-[#3b82f6] h-[64px] rounded-full border-[1px] border-solid border-[#D1D5DB]">
                  G
                </div>
                <div className="w-[14px]  absolute top-[3.3rem] right-[2.5rem] h-[14px] rounded-full border-[1px] border-solid bg-[#22C55E] border-white " />
              </div>
              <div className="flex items-center flex-col gap-[8px] mt-[12px]">
                <h1 className="text-center text-[28px] font-semibold leading-[1.2] self-stretch text-neutral-900">
                  Login
                </h1>
                <p className="text-center text-[16px] self-stretch text-[#374151] font-normal leading-[24px]">
                  Enter your password to login.
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-[32px] items-center gap-[8px] self-stretch px-12 pt-0 ">
              <label
                htmlFor="password"
                className="text-[#1f2937] text-[16px] font-normal leading-[24px] self-stretch"
              >
                Password
              </label>
              <div className="flex flex-col items-start flex-1 self-stretch relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={password || ""}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex h-[39px] flex-col outline-none justify-between focus:border-[1px] focus:border-[#a45fed] bg-[#F9FAFB] px-[12px] items-start self-stretch rounded-[8px] border border-solid border-[#E8D8FC]"
                />

                <img
                  src={visible}
                  onClick={() => setShowPassword((prevState) => !prevState)}
                  alt="visible-img"
                  className="absolute top-2 right-0 pr-[12px]"
                />
              </div>
              <div className="flex h-[24px] pr-[0.736px] pl-[173.264px] justify-end items-center self-stretch">
                <p className="text-right  text-base font-normal leading-6 underline text-neutral-700">
                  I forgot the password
                </p>
              </div>
            </div>
            <div className="flex px-12 mt-[16px] py-4 justify-between items-start self-stretch border-t border-neutral-300">
              <Link to="/signIn">
                <button className="flex w-[125px] h-[39px] p-[10px] px-[12px] justify-center items-center gap-[8px] rounded-[8px] border-[1.5px] border-neutral-200 bg-white">
                  Back
                </button>
              </Link>
              <button
                onClick={handleSubmit}
                disabled={!password}
                className={`flex text-white w-[125px] h-[39px] p-[10px] px-[12px] ${
                  password ? "bg-[#672A9F]" : "bg-[#9CA3AF]"
                } justify-center items-center gap-[8px] rounded-[8px] `}
              >
                {loading ? <Spinner /> : "Login"}
              </button>
            </div>
          </div>

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

export default Password;
