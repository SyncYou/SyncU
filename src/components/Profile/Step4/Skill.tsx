import { FiPlus } from "react-icons/fi";
import { useUserStore } from "../../../store/UseUserStore";

// Define the type for the props
interface SkillProps {
  skill: string;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Skill({ skill, setIsSearching }: SkillProps) {
  const { userDetails, toggleSkill } = useUserStore();

  return (
    <p
      onClick={() => {
        toggleSkill(skill);
        setIsSearching(false);
      }}
      className={`my-0 py-0 text-sm ${
        userDetails.stacks.includes(skill) ? "bg-gray-100 text-white" : ""
      }`}
    >
      {skill} <FiPlus />
    </p>
  );
}
