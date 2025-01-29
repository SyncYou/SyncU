import { ImImages } from "react-icons/im";
import Overlay from "../Reuseables/Overlay";
import SubSection from "../Reuseables/SubSection";
import useModalView from "../../hooks/useModalView";
import ProfileImageconfirm from "./ProfileImageconfirm";

function ProfileImageUpdate({ state }: { state: () => void }) {
  const { modal, handleModal } = useModalView();

  return (
    <Overlay>
      <div className="bg-white w-[500px] h-[424px] rounded-3xl pb-8">
        <SubSection state={state} header="Upload profile photo" />
        <div className="flex flex-col px-6 py-4 gap-6">
          <div className="">
            <p className="py-1 font-normal text-gray800 text-base">
              Select an avatar
            </p>
            <div className="flex gap-4 py-2">
              <div className="w-20 h-20 rounded-full bg-gray800 after:w-full after:h-full after:bg-black after:block after:rounded-full"></div>
              <div className="w-20 h-20 rounded-full bg-gray800"></div>
              <div className="w-20 h-20 rounded-full bg-gray800"></div>
            </div>
          </div>
          <div className="">
            <p className="py-1 font-normal text-gray800 text-base">
              Upload image
            </p>
            {modal && <ProfileImageconfirm state={handleModal} />}
            <div className="flex gap-4 py-2">
              <div
                onClick={handleModal}
                className="w-20 h-20 rounded-full border border-gray300 border-dashed flex justify-center items-center cursor-pointer"
              >
                <ImImages className="w-6 h-6 text-brand600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  );
}

export default ProfileImageUpdate;
