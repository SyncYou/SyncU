import { FiPlus } from "react-icons/fi";
import { useUserStore } from "../../../store/UseUserStore";

// Define the type for the props
interface SkillProps {
  skill: string;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>; // Function to set the search state
}

export function Skill({ skill, setIsSearching }: SkillProps) {
  const { userDetails, toggleSkill } = useUserStore();

  return (
    <>
      <p
        onClick={() => {
          toggleSkill(skill);
          setIsSearching(false);
        }}
        className={`${
          userDetails.stack.includes(skill) ? "bg-gray-100 text-white" : ""
        }`}
      >
        {skill} <FiPlus />
      </p>
    </>
  );
}
