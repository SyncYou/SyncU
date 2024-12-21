import { useState } from "react";
import check from "/signUp-imgs/Check.svg";

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

  const handleAvatarClick = () => {
    setChecked(isChecked ? null : items.id);
    handleAvatarSelect(items.img); 
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
