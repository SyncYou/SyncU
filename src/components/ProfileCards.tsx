import {
  BiArrowToRight,
  BiBriefcase,
  BiImage,
  BiLinkAlt,
  BiRightArrow,
  BiRightArrowAlt,
  BiUser,
} from "react-icons/bi";

const ProfileCards = () => {
  return (
    <div className="md:grid md:grid-cols-2 flex md:overflow-hidden overflow-x-scroll h-[114px] md:h-[242px] gap-5">
      <div className="flex justify-between items-center md:min-w-[370px] min-w-[275px] py-[30px] px-4 rounded-2xl md:h-[108px] h-[88px] border border-gray200">
        <div className="flex gap-4 h-full md:max-w-[306px] items-center">
          <div className="min-w-6 h-6">
            <BiImage className="text-2xl" />
          </div>
          <div className="text-left max-w-[212px] flex flex-col gap-1">
            <span className="text-gray950 block m-0 font-medium md:text-base text-sm">
              Add photo or avatar
            </span>
            <span className="text-gray700 font-normal text-sm">
              Upload an image or select an avatar.
            </span>
          </div>
        </div>
        <BiRightArrowAlt className="text-xl" />
      </div>
      <div className="flex justify-between items-center md:min-w-[370px] min-w-[275px] py-[30px] px-4 rounded-2xl md:h-[108px] h-[88px] border border-gray200">
        <div className="flex gap-4 h-full md:max-w-[306px] items-center">
          <div className="min-w-6 h-6">
            <BiBriefcase className="text-2xl" />
          </div>
          <div className="text-left max-w-[212px] flex flex-col gap-1">
            <span className="text-gray950 block m-0 font-medium md:text-base text-sm">
              Professional information
            </span>
            <span className="text-gray700 font-normal text-sm">
              Provide information about you do and your skillsets.
            </span>
          </div>
        </div>
        <BiRightArrowAlt className="text-xl" />
      </div>
      <div className="flex justify-between items-center md:min-w-[370px] min-w-[275px] py-[30px] px-4 rounded-2xl md:h-[108px] h-[88px] border border-gray200">
        <div className="flex gap-4 h-full md:max-w-[306px] items-center">
          <div className="min-w-6 h-6">
            <BiUser className="text-2xl" />
          </div>
          <div className="text-left max-w-[212px] flex flex-col gap-1">
            <span className="text-gray950 block m-0 font-medium md:text-base text-sm">
              Profile description
            </span>
            <span className="text-gray700 font-normal text-sm">
              Add a description to your profile.
            </span>
          </div>
        </div>
        <BiRightArrowAlt className="text-xl" />
      </div>
      <div className="flex justify-between items-center md:min-w-[370px] min-w-[275px] py-[30px] px-4 rounded-2xl md:h-[108px] h-[88px] border border-gray200">
        <div className="flex gap-4 h-full md:max-w-[306px] items-center">
          <div className="min-w-6 h-6">
            <BiLinkAlt className="text-2xl rotate-45" />
          </div>
          <div className="text-left max-w-[212px] flex flex-col gap-1">
            <span className="text-gray950 block m-0 font-medium md:text-base text-sm">
              Portfolio links
            </span>
            <span className="text-gray700 font-normal text-sm">
              Provide links to some of the works or projects you have done.
            </span>
          </div>
        </div>
        <BiRightArrowAlt className="text-xl" />
      </div>
    </div>
  );
};

export default ProfileCards;
