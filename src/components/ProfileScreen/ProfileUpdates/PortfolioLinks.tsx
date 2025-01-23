import SecondaryButton from "../../Reuseables/SecondaryButton";
import PrimaryButton from "../../Reuseables/PrimaryButton";
import { BiPlusCircle } from "react-icons/bi";
import { PiSpinner } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdDragIndicator } from "react-icons/md";
import { useUserData } from "../../../context/useUserData";
import Behance from "/assets/Behance.svg";
import useUpdatePortfolioLinks from "../../../hooks/useUpdatePortfolioLinks";

const PortfolioLinks = () => {
  // Custom hook to update portfolioLinks
  const { user } = useUserData();
  const { links } = user;
  const {
    error,
    portfolioLink,
    suggestedLinks,
    setPortfolioLink,
    setSuggestedLinks,
    mutateAsync,
    handleInputChange,
    handleInputDelete,
  } = useUpdatePortfolioLinks(links);

  return (
    <div className="flex flex-col gap-6 pt-6 h-[622px] w-full">
      <div className="flex flex-col h-[514px] gap-8 px-8">
        <div className="flex flex-col gap-6">
          <div
            className={`flex flex-col gap-2 ${
              suggestedLinks.length == 0 && "hidden"
            }`}
          >
            <p className="mb-1 font-normal text-sm text-gray800">
              Suggested links
            </p>
            <div className="flex gap-4">
              {suggestedLinks.map((url, index) => {
                return (
                  <div
                    onClick={() => {
                      setPortfolioLink([...portfolioLink, url]);
                      const newUrls = suggestedLinks.filter(
                        (_, i) => i != index
                      );
                      setSuggestedLinks(newUrls);
                    }}
                    className="h-12 w-12 relative rounded-full cursor-pointer"
                  >
                    <img src={Behance} alt="" />
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
              {portfolioLink?.map((link, i) => {
                return (
                  <div key={i} className="">
                    <div key={i} className="flex gap-3 h-[60px] w-[503.5px]">
                      <div className="flex gap-2">
                        <div className="h-[60px] w-[60px] bg-black rounded-lg border border-gray300"></div>
                        <div className="w-[363.5px] h-full relative">
                          <div className="absolute h-6 w-6 right-3 top-[18px]">
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
                    {/* Display error */}
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
                  setPortfolioLink([
                    ...portfolioLink,
                    { name: "URL link", url: "" },
                  ]);
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
        <PrimaryButton
          onClick={async () => {
            await mutateAsync(portfolioLink);
          }}
          disabled={links?.length === portfolioLink?.length}
          classes="w-[120px] h-11 gap-0"
        >
          Save
        </PrimaryButton>
        <SecondaryButton classes="w-[120px] h-11 gap-0">Cancel</SecondaryButton>
      </div>
    </div>
  );
};

export default PortfolioLinks;
