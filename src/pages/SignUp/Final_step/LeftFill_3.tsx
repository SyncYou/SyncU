import img from "/signUp-imgs/img.svg";
import Nav_Btn from "../../../components/styles/Reuse/Nav_Btn";
import { useUserStore } from "../../../store/UseUserStore";
import { ProfileImage } from "./ProfileImages";
import { Avatar } from "./Avatar";

interface ProfileImageItem {
  id: number;
  img: string;
}

interface ChangeEvent {
  target: {
    files: FileList | null;
  };
}

export function LeftFill_3() {
  const { userDetails, setUserDetails } = useUserStore();

  function handleImageUpload(e: ChangeEvent) {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const uploadImage = reader.result as string;
        setUserDetails("profileImage", uploadImage);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleAvatarSelect(image: string) {
    setUserDetails("profileImage", image);
  }

  const isValid =
    userDetails.firstName !== "" &&
    userDetails.lastName !== "" &&
    userDetails.email !== "" &&
    userDetails.location !== "" &&
    userDetails.profileImage !== "" &&
    userDetails.area !== "" &&
    userDetails.stack.length > 0;

  return (
    <>
      <div className="gap-6 self-stretch flex-col ">
        <h3 className="text-gray-600 font-medium text-sm ">STEP 5 of 5</h3>
        <div className="gap-3 flex-col ">
          <h1 className="text-[32px] font-semibold text-gray-950">
            Add a photo...
          </h1>
          <p className="text-gray-800 text-lg font-normal">
            This will help increase your chances of being accepted to work on a
            project.
          </p>
        </div>
      </div>

      <div className="gap-4 flex-col relative">
        <h3 className="text-gray-800 font-normal text-base">
          Select an avatar{" "}
        </h3>
        <span className="flex items-start gap-4 [&_img]:object-contain relative [&_img]:cursor-pointer">
          {ProfileImage.map((items: ProfileImageItem) => (
            <Avatar
              key={items.id}
              items={items}
              handleAvatarSelect={handleAvatarSelect}
            />
          ))}
        </span>
        <div className="gap-4 flex-col">
          <h3 className="text-gray-800 font-normal text-base">
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

      <Nav_Btn
        navTo="/finishing"
        btn_Style={`${
          isValid
            ? "bg-gray-950 text-opacity-100 text-white"
            : "text-opacity-40 cursor-not-allowed"
        }`}
        disabled={!isValid}
      />
    </>
  );
}
