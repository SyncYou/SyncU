import { ImImages } from "react-icons/im";
import Overlay from "../Reuseables/Overlay";
import SubSection from "../Reuseables/SubSection";
import useModalView from "../../hooks/useModalView";
import ProfileImageconfirm from "./ProfileImageconfirm";
import { useState } from "react";
import { uploadAvatar } from "../../utils/SupabaseRequest";
import { useUserStore } from "../../store/UseUserStore";
import { ProfileImage } from "../Profile/Final_step/ProfileImages";
import { Avatar } from "../Profile/Final_step/Avatar";

function ProfileImageUpdate({ state }: { state: () => void }) {
  const { modal, handleModal } = useModalView();
  const [checked, setChecked] = useState<number | null>(null);
  const { setUserDetails } = useUserStore();

  const handleAvatarClick = async (items: { id: number; img: string }) => {
    setChecked((checked) => (checked == items.id ? null : items.id));

    try {
      const response = await fetch(items.img);
      const blob = await response.blob();
      const file = new File([blob], "avatar.jpg", { type: blob.type });

      const avatarUrl = await uploadAvatar(file);
      setUserDetails({ photoUrl: avatarUrl });
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };

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
              {ProfileImage.map((items) => (
                <Avatar
                  key={items.id}
                  items={items}
                  checked={checked}
                  handleAvatarClick={handleAvatarClick}
                />
              ))}
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