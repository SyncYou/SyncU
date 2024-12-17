import SecondaryButton from "../../../../components/SecondaryButton";
import PrimaryButton from "../../../../components/PrimaryButton";
import { BiCheckCircle, BiPlusCircle } from "react-icons/bi";
import { PiSpinner } from "react-icons/pi";
import { useState } from "react";

const PortfolioLinks = () => {
  const [links, setLinks] = useState(["Behance"]);
  const [error, setError] = useState(false);

  return (
    <div className="flex flex-col gap-6 pt-6 h-[622px] w-full">
      <div className="flex flex-col h-[490px] gap-8 px-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="mb-1 font-normal text-sm text-gray800">
              Suggested links
            </p>
            <div className="flex gap-4">
              <div className="h-12 w-12 relative rounded-full bg-gray500 cursor-pointer">
                <div className="link">
                  <BiPlusCircle className="text-2xl text-white z-20" />
                </div>
              </div>
              <div className="h-12 w-12 relative rounded-full bg-gray500 cursor-pointer">
                <div className="link">
                  <BiPlusCircle className="text-2xl text-white z-20" />
                </div>
              </div>
              <div className="h-12 w-12 relative rounded-full bg-gray500 cursor-pointer">
                <div className="link">
                  <BiPlusCircle className="text-2xl text-white z-20" />
                </div>
              </div>
              <div className="h-12 w-12 relative rounded-full bg-gray500 cursor-pointer">
                <div className="link">
                  <BiPlusCircle className="text-2xl text-white z-20" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="mb-1 font-normal text-sm text-gray800">
              Add or arrange links
            </p>
            <div className="flex flex-col gap-4 h-[314px] overflow-y-auto">
              {links.map((link, i) => {
                return (
                  <div className="">
                    <div key={i} className="flex gap-3 h-[60px] w-[467.5px]">
                      <div className="flex gap-2">
                        <div className="h-[60px] w-[60px] bg-black rounded-lg border border-gray300"></div>
                        <div className="w-[363.5px] h-full relative">
                          <div className="absolute h-6 w-6 right-3 top-[18px]">
                            {/* <BiCheckCircle className="w-full h-full text-success700" /> */}
                            <PiSpinner className="w-full h-full animate-spin" />
                          </div>
                          <input
                            placeholder="www.website.com/"
                            type="text"
                            name=""
                            id=""
                            className={`w-[363.5px] h-full pt-4 px-3 ${
                              error ? "border-alert-600" : "border-gray200"
                            } outline-none border rounded-lg focus:border-brand400`}
                          />
                          <label
                            className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                            htmlFor="lastName"
                          >
                            {link}
                          </label>
                        </div>
                      </div>
                    </div>
                    {error && (
                      <p className="text-alert-600 font-normal text-xs mt-1">
                        Enter a valid URL link.
                      </p>
                    )}
                  </div>
                );
              })}
              <button
                onClick={() => {
                  setLinks((prevData) => [...prevData, "Ameenu"]);
                  console.log(links);
                }}
                className="w-[465px] h-11 flex items-center gap-3 px-1 py-[10px] hover:bg-gray100 hover:text-gray800 text-gray400 font-medium text-base"
              >
                <BiPlusCircle className="text-[24px]" /> Add new link
              </button>
            </div>
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

export default PortfolioLinks;
