import img from "/signUp-imgs/img.svg";
import Nav_Btn from "../../Reuseables/Nav_Btn";
import { ProfileImage } from "./ProfileImages";
import { Avatar } from "./Avatar";
import { useProfileImage } from "../../../hooks/useProfileImage";
import { useState } from "react";

interface ProfileImageItem {
  id: number;
  img: string;
}

// interface ChangeEvent {
//   target: {
//     files: FileList | null;
//   };
// }

export default function LeftFill_3() {
  const {
    handleAvatarSelect,
    handleImageUpload,
    handleRequest,
    isValid,
  } = useProfileImage();

  const [checked, setChecked] = useState<number | null>(null);

  const handleAvatarClick = async (items:{id: number; img: string; }) => {
    setChecked(checked => checked == items.id? null : items.id);

    try {
      const response = await fetch(items.img);
      const blob = await response.blob();
      const file = new File([blob], "avatar.jpg", { type: blob.type });

      const avatarUrl = await uploadAvatar(file);

      handleAvatarSelect(avatarUrl);
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };

  return (
    <>
      <section>
        <div className="md:p-5 flex flex-col w-full">
          <div className="gap-6 self-stretch flex-col ">
            <h3 className="text-gray-600 font-medium text-sm my-5">
              STEP 5 of 5
            </h3>
            <div className="gap-3 flex-col my-5">
              <h1 className="text-[1.5rem] md:text-[32px] font-semibold text-gray-950 my-3">
                Add a photo...
              </h1>
              <p className="text-gray-800 text-base md:text-lg font-normal my-3">
                This will help increase your chances of being accepted to work
                on a project.
              </p>
            </div>
          </div>

          <div className="gap-4 flex-col relative">
            <h3 className="text-gray-800 font-normal text-base my-4">
              Select an avatar{" "}
            </h3>
            <span className="flex items-start gap-4 [&_img]:object-contain relative [&_img]:cursor-pointer">
              {ProfileImage.map((items: ProfileImageItem) => (
                <Avatar
                  key={items.id}
                  items={items}
                  checked={checked}
                  handleAvatarClick={handleAvatarClick}
                />
              ))}
            </span>
            <div className="gap-4 flex-col">
              <h3 className="text-gray-800 font-normal text-base my-6">
                or upload an image{" "}
              </h3>
              <label className="rounded-full border-dashed  [&_img]:object-contain border bg-white border-gray-300 h-[80px] w-[80px] flex items-center justify-center *:w-8 *:h-8 cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <img src={img} alt="update profile image" />
              </label>
            </div>
          </div>
          <div className="pt-9">
            <Nav_Btn
              disabled={!isValid}
              showPrevious={true}
              handleRequest={handleRequest}
              navTo="/onboarding/finishing"
              btn_Style={`w-[184px] ${
                isValid
                  ? "bg-gray-950 text-opacity-100 text-white"
                  : "text-opacity-40 cursor-not-allowed"
              }`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
