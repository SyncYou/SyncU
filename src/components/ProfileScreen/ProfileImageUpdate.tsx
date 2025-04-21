import { ImImages } from "react-icons/im";
import Overlay from "../Reuseables/Overlay";
import SubSection from "../Reuseables/SubSection";
import useModalView from "../../hooks/useModalView";
import ProfileImageconfirm from "./ProfileImageconfirm";
import { useState, useRef, ChangeEvent } from "react";
import { uploadAvatar } from "../../utils/SupabaseRequest";
import { useUserStore } from "../../store/UseUserStore";
import { ProfileImage } from "../Profile/Final_step/ProfileImages";
import { Avatar } from "../Profile/Final_step/Avatar";

function ProfileImageUpdate({ state }: { state: () => void }) {
  const { modal, handleModal } = useModalView();
  const [checked, setChecked] = useState<number | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setUserDetails } = useUserStore();

  const handleAvatarClick = async (items: { id: number; img: string }) => {
    setChecked((checked) => (checked == items.id ? null : items.id));

    try {
      const response = await fetch(items.img);
      const blob = await response.blob();
      const file = new File([blob], "avatar.jpg", { type: blob.type });

      const avatarUrl = await uploadAvatar(file);
      setUserDetails( "photoUrl", avatarUrl );
      state();
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPreviewUrl(event.target.result as string);
          handleModal();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    
    setIsUploading(true);
    try {
      const avatarUrl = await uploadAvatar(selectedFile);
      setUserDetails( "photoUrl", avatarUrl );
      setIsUploading(false);
      state(); // Close the modal after successful upload
    } catch (error) {
      console.error("Error uploading avatar:", error);
      setIsUploading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <Overlay>
        <div className="bg-white w-[500px] h-[424px] rounded-3xl pb-8">
          <SubSection state={state} header="Upload profile photo" />
          <div className="flex flex-col px-6 py-4 gap-6">
            <div>
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
            <div>
              <p className="py-1 font-normal text-gray800 text-base">
                Upload image
              </p>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              <div
                onClick={triggerFileInput}
                className="w-20 h-20 rounded-full border border-gray300 border-dashed flex justify-center items-center cursor-pointer"
              >
                <ImImages className="w-6 h-6 text-brand600" />
              </div>
            </div>
          </div>
        </div>
      </Overlay>

      {modal && previewUrl && (
        <ProfileImageconfirm
          state={() => {
            setPreviewUrl(null);
            handleModal();
          }}
          imageUrl={previewUrl}
          onConfirm={handleUpload}
          isUploading={isUploading}
          onChange={() => triggerFileInput()}
        />
      )}
    </>
  );
}

export default ProfileImageUpdate;