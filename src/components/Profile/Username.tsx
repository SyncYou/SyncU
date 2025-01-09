import React, { useEffect, useState } from "react";
import Nav_Btn from "../styles/Reuse/Nav_Btn";
import { sendUserDetails } from "../../utils/SupabaseRequest";
import { useUserStore } from "../../store/UseUserStore";

const Username: React.FC = () => {
  const [disable, setDisable] = useState(true);
  const { userDetails, setUserDetails } = useUserStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails(name as keyof typeof userDetails, value);
  };

  const isValid =
    userDetails.firstName.trim() !== "" &&
    userDetails.lastName.trim() !== "" &&
    userDetails.countryOfResidence.trim() !== "" &&
    userDetails.firstName !== "N/A" &&
    userDetails.lastName !== "N/A" &&
    userDetails.email !== "" &&
    userDetails.countryOfResidence !== "N/A" &&
    userDetails.username.trim() !== "";

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    setDisable(!isValid);
    console.log(disable);
  }, [userDetails, isValid]);

  const handleRequest = async () => {
    if (isValid) {
      try {
        const { data, error } = await sendUserDetails(userDetails);
        if (error) {
          console.log(error);
          throw new Error("An error occurred")
        }
        console.log("Data sent to Supabase:", data);
        return {data, error};
      } catch (error) {
        console.error("Error sending data to Supabase:", error);
      }
    }
  };

  return (
    <>
      <section className="mt-20">
        <div className="p-5 flex flex-col w-full">
          <small className="font-medium text-[14px] leading-5 text-[#8C8C99]">
            STEP 2 of 5
          </small>
          <div className="my-5 flex flex-col">
            <h2 className="font-semibold text-[24px] leading-[32px] text-secondary">
              Enter a username.
            </h2>
            <p className="text-gray leading-6 font-normal text-[16px] py-2">
              This will enable other users to find you easily on syncu.
            </p>
          </div>

          <div className="space-y-5">
            <div className="border border-[#E6E6F0] rounded-xl py-2 px-3 flex flex-col gap-2 focus:border focus:border-primary focus:shadow focus:shadow-[#EDE4FA] max-w-[400px]">
              <label
                className="text-secondary leading-6 text-[16px] font-normal"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="focus:outline-none"
                name="username"
                type="text"
                placeholder="John"
                value={userDetails.username}
                onChange={handleChange}
              />
            </div>

            <Nav_Btn
              disabled={!isValid}
              showPrevious={true}
              handleRequest={handleRequest}
              navTo="/onboarding/area-of-expertise"
              btn_Style={`${
                isValid
                  ? "bg-gray-950 text-opacity-100 text-white"
                  : "text-opacity-40 cursor-not-allowed"
              }`}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Username;
