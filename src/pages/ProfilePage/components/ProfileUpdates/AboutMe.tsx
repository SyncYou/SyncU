import { ChangeEvent, useState } from "react";
import ProfileImageUpdate from "../ProfileImageUpdate";
import SecondaryButton from "../../../../components/SecondaryButton";
import PrimaryButton from "../../../../components/PrimaryButton";
import { useUserData } from "../../../../context/useUserData";
import useFetchUserData from "../../../../hooks/useFetchUserData";

const AboutMe = () => {
  const { data } = useFetchUserData();
  const [update, setUpdate] = useState(false);
  const { firstName, lastName, description } = useUserData();
  const [formData, setFormData] = useState({
    firstName: firstName || data[0].firstName,
    lastName: lastName || data[0].lastName,
    aboutMe: description || data[0].description,
  });

  const handleFormData = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value, name } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleUpdateModal = () => {
    setUpdate((h) => !h);
  };
  return (
    <div className="flex flex-col gap-6 pt-6 h-[622px] w-full">
      <div className="flex flex-col h-[490px] gap-8 px-8">
        <div className="flex gap-4 items-center">
          <div className="h-20 w-20 bg-gray950 rounded-full"></div>
          <div className="">
            <p className="mb-1 font-normal text-sm text-gray700">
              Update profile picture
            </p>
            <p
              onClick={handleUpdateModal}
              className="font-medium text-sm text-brand600 cursor-pointer"
            >
              Change photo
            </p>
            {update && <ProfileImageUpdate state={handleUpdateModal} />}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex gap-6">
            <div className="relative h-[60px] w-[286px]">
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleFormData}
                className="h-[60px] text-gray800 font-normal text-base w-full pt-4 px-3 outline-none focus:drop-shadow-md border rounded-lg border-gray300 focus:border-brand400"
              />
              <label
                className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                htmlFor="firstName"
              >
                First Name
              </label>
            </div>
            <div className="relative h-[60px] w-[286px]">
              <input
                type="text"
                name="lastName"
                id="lastName"
                onChange={handleFormData}
                value={formData.lastName}
                className="h-[60px] text-gray800 font-normal text-base w-full pt-4 px-3 outline-none focus:drop-shadow-md border rounded-lg border-gray300 focus:border-brand400"
              />
              <label
                className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                htmlFor="lastName"
              >
                Last Name
              </label>
            </div>
          </div>
          <div className="">
            <div className="relative h-[60px] w-[389px]">
              <select
                name=""
                id=""
                className="h-[60px] w-[389px] text-gray800 font-normal text-base pt-4 px-2 outline-none focus:drop-shadow-md border rounded-lg border-gray300 focus:border-brand400"
              >
                <option value="">Nigeria</option>
              </select>
              <label
                className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                htmlFor="COR"
              >
                Country of residence
              </label>
            </div>
          </div>
          <div className="relative">
            <textarea
              value={formData.aboutMe}
              onChange={handleFormData}
              maxLength={400}
              name="aboutMe"
              id=""
              placeholder="Talk about yourself......."
              className="w-full h-[135px] text-gray800 font-normal text-base pb-2 pt-6 m-0 px-3 outline-none rounded-lg border border-gray300"
            ></textarea>
            <label
              className="absolute left-3 top-2 font-medium text-gray950 text-xs"
              htmlFor="lastName"
            >
              Description
            </label>
            <p className="text-right text-xs font-normal text-gray700">
              <span
                className={`${
                  formData.aboutMe.length >= 400 && "text-red-500"
                }`}
              >
                {formData.aboutMe.length}
              </span>
              /400 words
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[84px] border-t border-gray200 px-8 pb-6 pt-4 flex justify-end  gap-4">
        <PrimaryButton disabled={true} classes="w-[120px] h-11 gap-0">
          Save
        </PrimaryButton>
        <SecondaryButton classes="w-[120px] h-11 gap-0">Cancel</SecondaryButton>
      </div>
    </div>
  );
};

export default AboutMe;
