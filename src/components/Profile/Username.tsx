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
    userDetails.username.trim() !== "" && userDetails.username !== "N/A";

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    setDisable(!isValid);
  }, [userDetails, isValid]);

  const handleRequest = async () => {
    if (isValid) {
      try {
        const response = await sendUserDetails(userDetails);
        console.log("Data sent to Supabase:", response);
        return response;
      } catch (error) {
        console.error("Error sending data to Supabase:", error);
        // Optional: Set an error state here to display to the user
      }
    }
  };

  return (
    <section>
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

        <form className="space-y-5">
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
            disabled={disable}
            showPrevious={true}
            handleRequest={handleRequest}
            navTo="/area-of-expertise"
            btn_Style={`${
              isValid
                ? "bg-gray-950 text-opacity-100 text-white"
                : "text-opacity-40 cursor-not-allowed"
            }`}
          />
        </form>
      </div>
    </section>
  );
};

export default Username;
