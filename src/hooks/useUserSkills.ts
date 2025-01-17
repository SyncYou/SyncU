import { useState, useEffect, useRef } from "react";
import { useUserStore } from "../store/UseUserStore";
import useToastNotifications from "./useToastNotifications";
import { Skills } from "../components/Profile/Step4/Skills";
import { sendUserDetails } from "../utils/SupabaseRequest";

// Custom Hook to manage user skills logic
export const useUserSkills = () => {
  const { userDetails, toggleSkill, removeSkill } = useUserStore();
  const [active, setActive] = useState(false);
  const activeRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(true);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { toast, showToast } = useToastNotifications();

  const valid =
    userDetails.firstName.trim() !== "" &&
    userDetails.lastName.trim() !== "" &&
    userDetails.countryOfResidence.trim() !== "" &&
    userDetails.firstName !== "N/A" &&
    userDetails.lastName !== "N/A" &&
    userDetails.email !== "" &&
    userDetails.countryOfResidence !== "N/A" &&
    userDetails.username.trim() !== "" &&
    userDetails.areaOfExpertise !== "" &&
    userDetails.stacks.length > 0;

  useEffect(() => {
    setIsValid(userDetails.stacks.length >= 3 && valid);
  }, [userDetails.stacks]);

  // Handle click outside of modal
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        activeRef.current &&
        !activeRef.current.contains(event.target as Node) &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setActive(false);
        setShowModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredSkills = Skills.filter((item) =>
    item.skill.toLowerCase().includes(search.toLowerCase())
  );

  function handleSkillClick(skill: string) {
    toggleSkill(skill);
    setShowModal(false);
    setSearch("");
    setIsSearching(!isSearching);
  }



  function handleRemoveSkill(skill: string) {
    removeSkill(skill);
    setIsSearching(false);
  }

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }, [userDetails, isValid]);

  const handleRequest = async () => {
    try {
      const { error } = await sendUserDetails(userDetails);
      if (error) {
        const showNotificationTimeout = setTimeout(() => {
          setShowNotifications(true);
          showToast("error", "An Error occurred", "Please try again.");
        }, 1000);

        const hideNotificationTimeout = setTimeout(() => {
          setShowNotifications(false);
        }, 5000);

        return () => {
          clearTimeout(showNotificationTimeout);
          clearTimeout(hideNotificationTimeout);
        };
      }
    } catch (error) {
      console.error("Error sending data to Supabase:", error);
    }
  };

  return {
    active,
    setActive,
    activeRef,
    modalRef,
    showModal,
    setShowModal,
    search,
    setSearch,
    isSearching,
    setIsSearching,
    isValid,
    userDetails,
    showNotifications,
    toast,
    filteredSkills,
    handleSkillClick,
    handleRemoveSkill,
    handleRequest,
  };
};
