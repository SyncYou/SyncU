import SecondaryButton from "../../../../components/SecondaryButton";
import PrimaryButton from "../../../../components/PrimaryButton";
import { BiCheckCircle, BiPlusCircle } from "react-icons/bi";
import { PiSpinner } from "react-icons/pi";
import { ChangeEvent, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdDragIndicator } from "react-icons/md";
import { useUserData } from "../../../../context/useUserData";

interface Links {
  name: string;
  url: string;
}

type suggestedLink = "Behance" | "x" | "LinkedIn" | "fiverr";

const PortfolioLinks = () => {
  const [error, setError] = useState(false);
  const { links, setLinks, suggestedLinks, setSuggestedLinks } = useUserData();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    i: number,
    link: Links
  ) => {
    let data = [...links];
    data[i] = {
      name: link.name,
      url: e.target.value,
    };
    setLinks(data);
  };

  const handleInputDelete = (i: number, link: Links) => {
    if (
      link.name === "Behance" ||
      link.name === "x" ||
      link.name === "LinkedIn" ||
      link.name === "fiverr"
    ) {
      setSuggestedLinks([...suggestedLinks, link]);
    }
    const newLinks = links.filter((_, index) => index != i);
    setLinks(newLinks);
  };

  return (
    <div className="flex flex-col gap-6 pt-6 h-[622px] w-full">
      <div className="flex flex-col h-[514px] gap-8 px-8">
        <div className="flex flex-col gap-6">
          <div className={`flex flex-col gap-2 ${suggestedLinks.length == 0 && "hidden"}`}>
            <p className="mb-1 font-normal text-sm text-gray800">
              Suggested links
            </p>
            <div className="flex gap-4">
              {suggestedLinks.map((url, index) => {
                return (
                  <div
                    onClick={() => {
                      setLinks([...links, url]);
                      const newUrls = suggestedLinks.filter(
                        (_, i) => i != index
                      );
                      setSuggestedLinks(newUrls);
                    }}
                    className="h-12 w-12 relative rounded-full bg-gray500 cursor-pointer"
                  >
                    {/* <div className="flex items-center justify-center rounded-full h-full w-full">
                      <BiPlusCircle className="text-2xl text-white z-20" />
                    </div> */}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="mb-1 font-normal text-sm text-gray800">
              Add or arrange links
            </p>
            <div className="flex flex-col gap-4 h-[350px] overflow-y-auto">
              {links.map((link, i) => {
                return (
                  <div className="">
                    <div key={i} className="flex gap-3 h-[60px] w-[503.5px]">
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
                            value={link.url}
                            onChange={(e) => handleInputChange(e, i, link)}
                            className={`w-[363.5px] h-full pt-4 px-3 ${
                              error ? "border-alert-600" : "border-gray200"
                            } outline-none border rounded-lg focus:border-brand400`}
                          />
                          <label
                            className="absolute left-3 top-2 font-medium text-gray950 text-xs"
                            htmlFor="lastName"
                          >
                            {link.name}
                          </label>
                        </div>
                      </div>
                      <MdDragIndicator className="text-[24px] my-auto cursor-pointer" />
                      <RiDeleteBinLine
                        onClick={() => handleInputDelete(i, link)}
                        className="text-[24px] my-auto cursor-pointer"
                      />
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
                  setLinks([...links, { name: "URL link", url: "" }]);
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
