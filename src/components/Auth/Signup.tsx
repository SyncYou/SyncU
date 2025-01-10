import React, { useEffect, useState } from "react";
import Header from "../Reuseables/Header";
import Google from "/google.svg";
import github from "/github.svg";
import { LuMail } from "react-icons/lu";
import ControlledInput from "../Reuseables/ControlledInput";
import SocialButton from "../Reuseables/SocialButton";
import ControlledButton from "../Reuseables/ControlledButton";
import { userSchema } from "../../schema/userSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "../../types/user";
import { signupWithOTP } from "../../utils/AuthRequest";
import { useNavigate } from "react-router";
import Loading from "../Reuseables/Loading";
import { useUserStore } from "../../store/UseUserStore";
import useToastNotifications from "../../hooks/useToastNotifications";
import Toast from "../Reuseables/Toast";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [disable, setDisable] = useState(true);
  const { setUserDetails } = useUserStore();
  const [showNotifications, setShowNotifications] = useState(false);
  const { toast, showToast } = useToastNotifications();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
    watch,
  } = useForm<User>({
    resolver: zodResolver(userSchema),
    mode: "onChange",
  });

  const email = watch("email");

  useEffect(() => {
    setDisable(!isValid || !email);
  }, [email, isValid]);

  const handleSignup = async (data: any) => {
    const { email } = data;
    if (email) {
      setDisable(false);
    }
    try {
      setUserDetails("email", email);
      localStorage.setItem("userEmail", email);

      const { data: response, error } = await signupWithOTP(email);

      if (error) {
        const showNotificationTimeout = setTimeout(() => {
          setShowNotifications(true);
          showToast("error", "An Error occurred", "Please try again.");
        }, 3000);

        const hideNotificationTimeout = setTimeout(() => {
          setShowNotifications(false);
        }, 10000);

        console.log(error);
        return () => {
          clearTimeout(showNotificationTimeout);
          clearTimeout(hideNotificationTimeout);
        };
      }

      if (response) {
        const showNotificationTimeout = setTimeout(() => {
          setShowNotifications(true);
          showToast(
            "success",
            "Authentication Successful",
            "Check your email for your otp"
          );
        }, 3000);

        const hideNotificationTimeout = setTimeout(() => {
          setShowNotifications(false);
        }, 10000);

        console.log(error);
        navigate("/auth/verify-email");
        console.log(response);
        return () => {
          clearTimeout(showNotificationTimeout);
          clearTimeout(hideNotificationTimeout);
        };
      }

      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showNotifications && toast && (
        <div className="absolute top-0 flex items-center justify-center w-full z-50">
          <Toast
            type={toast.type}
            message={toast.message}
            description={toast.description}
          />
        </div>
      )}
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

            <form onSubmit={handleSubmit(handleSignup)} className="my-10 md:my-5">
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
        </div>
      </section>
      {isSubmitting && <Loading />}
    </>
  );
};

export default Signup;
