
import { IoMdCheckmark } from "react-icons/io";


interface AvatarProps {
  items: {
    id: number;
    img: string;
  };
  checked: number | null;
  handleAvatarClick: (items:{id: number; img: string; }) => void;
}

export function Avatar({ items, checked, handleAvatarClick }: AvatarProps) {

  return (
    <>
      <span className="relative">
        <img src={items.img} alt="profile avatar" onClick={() => handleAvatarClick(items)} />
        {checked == items.id && (
          <fieldset className="h-5 w-5  flex items-center justify-center rounded-full bg-brand-600 absolute top-0 z-10 text-white text-base left-[8.5vh]">
            <IoMdCheckmark />
          </fieldset>
        )}
      </span>
    </>
  );
}
