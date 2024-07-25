import React, { useState } from "react";

const EditProfile = () => {
  const [showTags, setShowTags] = useState(true)
  return (
    <>
      <div className="flex items-center gap-2">
        <small>My profile</small>
        <img src="/chevron-right.svg" alt="" />
        <small className="font-medium">Edit profile</small>
      </div>
      <div>
        <h1 className="font-semibold text-[28px] text-[#1F2937] leading-[33.6px] my-5">
          Edit profile
        </h1>

        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-[20px] leading-7 text-[#374151]">
            Personal information
          </h2>
          <img src="/arrow-down.svg" alt="" />
        </div>

        <div className="my-5">
          <div className="flex items-center gap-4">
            <img src="/g-profile.svg" alt="" className="w-[50px] h-[50px]" />
            <div className="leading-5 cursor-pointer">
              <p className="text-[#8E3FDE] font-semibold leading-6">
                Upload photo
              </p>
              <small className="text-[14px] leading-5 text-[#6B7280]">
                Recommended size: (400 x 400)
              </small>
            </div>
          </div>

          <div className="max-w-[768px]">
            <form className="my-5 space-y-5">
              <div className="flex items-center gap-5 my-5">
                <div className="flex flex-col w-full">
                  <label
                    className="leading-6 text-[#1F2937]"
                    htmlFor="fullname"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Gojo Satori"
                    className="border border-[#E8D8FC] rounded-md w-full p-1 focus:outline-none text-[#374151]"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    className="leading-6 text-[#1F2937]"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="@gojosatori123"
                    className="border border-[#E8D8FC] rounded-md w-full p-1 focus:outline-none text-[#374151]"
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 my-5">
                <div className="flex flex-col w-full">
                  <label htmlFor="gender">Gender</label>
                  <select
                    name="gender"
                    className="border border-[#E8D8FC] rounded-md w-full p-1 focus:outline-none text-[#374151] bg-transparent"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="country">Country</label>
                  <select
                    name="gender"
                    className="border border-[#E8D8FC] rounded-md w-full p-1 focus:outline-none text-[#374151] bg-transparent"
                  >
                    <option value="nigeria">Nigeria</option>
                    <option value="usa">USA</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="workplace">Workplace</label>
                <input
                  type="text"
                  className="border border-[#E8D8FC] rounded-md w-full p-1 focus:outline-none text-[#374151]"
                  name="workplace"
                  placeholder="Enter company name..."
                />
              </div>
              <div>
                <label htmlFor="brief-bio">Brief bio</label>
                <textarea
                  className="border border-[#E8D8FC] rounded-md w-full p-1 focus:outline-none text-[#374151]"
                  name="brief-bio"
                  id=""
                  cols="30"
                  rows="10"
                  maxLength={100}
                  placeholder="Tell people about yourself here..."
                />
              </div>
            </form>

            {/* Tags */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <h3 className="text-[#374151] font-semibold leading-8 text-[20px]">
                  Profile tags
                </h3>
                <img onClick={() => {
                  setShowTags(prev => !prev)
                }} className="w-[24px] h-[24px] cursor-pointer" src={showTags ? '/arrow-down.svg' : '/arrow-left.svg'} alt="" />
              </div>

              <div>
                <p className="text-[#1F2937] leading-6">Add skills/toolstacks</p>

                <div className="relative flex items-center gap-3 w-full my-3 p-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-md">
                  <div className="flex items-center gap-2 text-nowrap bg-[#374151] p-2 rounded-full">
                    <img src="/Figma.svg" alt="" />
                    <small className="text-white">Figma</small>
                    <img src="/cancel.svg" alt="" />
                  </div>
                  <div className="flex items-center gap-2 text-nowrap bg-[#374151] p-2 rounded-full">
                    {/* <img src="/Figma.svg" alt="" /> */}
                    <small className="text-white">UI design</small>
                    <img src="/cancel.svg" alt="" />
                  </div>
                  <div className="flex items-center gap-2 text-nowrap bg-[#374151] p-2 rounded-full">
                    {/* <img src="/Figma.svg" alt="" /> */}
                    <small className="text-white">User Experience design</small>
                    <img src="/cancel.svg" alt="" />
                  </div>
                  <div className="flex items-center gap-2 text-nowrap bg-[#374151] p-2 rounded-full">
                    {/* <img src="/Figma.svg" alt="" /> */}
                    <small className="text-white">Product design</small>
                    <img src="/cancel.svg" alt="" />
                  </div>
                  <img className="absolute right-2 w-[20px] h-[20px]" src="/arrow-down.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
