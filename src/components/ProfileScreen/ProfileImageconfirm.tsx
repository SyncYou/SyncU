import Overlay from "../Reuseables/Overlay";
import SubSection from "../Reuseables/SubSection";
import { ImEarth } from "react-icons/im";
import PrimaryButton from "../Reuseables/PrimaryButton";
import SecondaryButton from "../Reuseables/SecondaryButton";
import { BsPencilSquare } from "react-icons/bs";

const ProfileImageconfirm = ({ state }: { state: () => void }) => {
  return (
    <Overlay>
      <div className="bg-white w-[485px] h-[572px] rounded-3xl">
        <SubSection state={state} header="Upload photo" />
        <div className="py-6 flex flex-col gap-4">
          <div className="w-[300px] h-[300px] rounded-full bg-gray950 mx-auto"></div>
          <div className="flex flex-col gap-1 max-h-[416px] pb-2 text-center">
            <p className="font-medium text-base text-gray950">Confirm Photo</p>
            <p className="flex justify-center items-center gap-1 font-normal text-xs text-gray700">
              <ImEarth />
              This visible to everyone
            </p>
          </div>
          <div className="w-full h-[84px] border-t border-gray200 px-8 pb-6 pt-4 flex gap-4 items-center">
            <PrimaryButton classes="w-full h-11 gap-0">Confirm</PrimaryButton>
            <SecondaryButton classes="w-full h-11 gap-0">
              Change <BsPencilSquare />
            </SecondaryButton>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default ProfileImageconfirm;
