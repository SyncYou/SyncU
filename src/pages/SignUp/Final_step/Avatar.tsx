import { useState } from "react";
import check from "/signUp-imgs/Check.svg";
import { uploadAvatar } from "../../../utils/SupabaseRequest";

interface AvatarProps {
  items: {
    id: number;
    img: string;
  };
  handleAvatarSelect: (imgUrl: string) => void;
}

export function Avatar({ items, handleAvatarSelect }: AvatarProps) {
  const [checked, setChecked] = useState<number | null>(null); 

  
  const isChecked = items.id === checked;

  const handleAvatarClick = async () => {
    setChecked(isChecked ? null : items.id);

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
      <span className="relative">
        <img
          src={items.img}
          alt="profile avatar"
          onClick={handleAvatarClick}
        />
        {isChecked && (
          <fieldset className="p-1 rounded-full bg-brand-600 absolute top-[5.5vh] z-10 left-[8.5vh]">
            <img src={check} alt="check" />
          </fieldset>
        )}
      </span>
    </>
  );
}
