import { useRef, useState, useEffect } from "react";
import caret from "/signUp-imgs/CaretUpDown.svg";
import Nav_Btn from "../../../components/styles/Reuse/Nav_Btn";
import { useUserStore } from "../../../store/UseUserStore";
import { Skills } from "./Skills";
import { Skill } from "./Skill";
import { Modal2 } from "../../../components/styles/Reuse/Modal2";
import { FaTimes } from "react-icons/fa";
import { sendUserDetails } from "../../../utils/SupabaseRequest";

interface Skill {
  id: number;
  skill: string;
  selected: boolean;
}

export function LeftFill_2() {
  const { userDetails, toggleSkill, removeSkill, isStackValid } =
    useUserStore();
  const [active, setActive] = useState(false);
  const activeRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(true);

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

  const filteredSkills = Skills.filter((item: Skill) =>
    item.skill.toLowerCase().includes(search.toLowerCase())
  );

  function handleSkillClick(skill: Skill) {
    toggleSkill(skill.skill);
    setShowModal(false);
    setSearch("");
    setIsSearching(!isSearching);
  }

  function handleRemoveSkill(skill: string) {
    removeSkill(skill);
    setIsSearching(false);
  }

  const handleRequest = async () => {
    // if (isValid) {
      try {
        const response = await sendUserDetails(userDetails);
        console.log("Data sent to Supabase:", response);
        return response;
      } catch (error) {
        console.error("Error sending data to Supabase:", error);
      // }
    }
  };

  return (
    <>
      <div className="gap-6 self-stretch flex-col" ref={activeRef}>
        <h3 className="text-gray-600 font-medium text-sm">STEP 4 of 5</h3>
        <div className="gap-3 flex-col">
          <h1 className="text-[32px] font-semibold text-gray-950">
            What are you skilled at?
          </h1>
          <p className="text-gray-800 text-lg font-normal">
            This will enable us match you to projects that suits you.
          </p>
        </div>
      </div>

      <div className="gap-4 flex-col relative">
        <h3 className="text-gray-800 font-normal text-sm">
          Add at least 3/10 skills or stacks
        </h3>
        <span
          className={`flex items-start justify-between py-2 px-3 border border-solid h-[90%] bg-white w-[62%] rounded-lg ${
            active ? "border-brand-400 shadow-active-state" : "border-gray-200"
          }`}
        >
          <span className="flex items-start flex-col gap-1 w-full">
            <p className="text-gray-950 text-xs font-medium">Skills/stacks</p>
            {isSearching ? (
              <input
                type="text"
                name="skills"
                className="text-gray-800 text-base font-medium mb-[50px] w-full outline-none"
                placeholder="Type a skill or stack for e.g, UI design."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onClick={() => {
                  setActive(true);
                  setShowModal(true);
                }}
              />
            ) : (
              <div className="gap-4 [&_p]:text-gray-950 [&_p]:rounded-3xl [&_p]:border-gray-300 [&_p]:border [&_p]:py-1 [&_p]:px-[20px] w-full flex-wrap">
                {userDetails.stack.map((skill, index) => (
                  <p
                    key={index}
                    className={`${
                      skill === "N/A"
                        ? "border-none"
                        : "border  [&_span]:flex [&_span]:items-center [&_span]:gap-[10px] cursor-pointer [&_span]:text-brand-600 bg-skill"
                    }`}
                    onClick={() => handleRemoveSkill(skill)}
                  >
                    {skill === "N/A" ? null : (
                      <span>
                        {skill}
                        <FaTimes />{" "}
                      </span>
                    )}
                  </p>
                ))}
              </div>
            )}
          </span>
          <img src={caret} alt="caretUpDown" />
        </span>

        <div className="absolute bottom-[25%]" ref={modalRef}>
          {showModal && (
            <Modal2
              filteredSkills={filteredSkills}
              handleSkillClick={handleSkillClick}
            />
          )}
        </div>
      </div>

      <div className="gap-2 flex-col">
        <h3 className="text-gray-800 font-normal text-sm">
          Suggested skills & stacks
        </h3>
        <span className="flex flex-wrap gap-2 [&_p]:text-gray-950 [&_p]:flex [&_p]:items-center [&_p]:gap-[10px] [&_p]:rounded-3xl [&_p]:border-gray-300 [&_p]:border [&_p]:border-solid [&_p]:py-1 [&_p]:px-[20px] [&_p]:hover:cursor-pointer">
          {Skills.map((skill: Skill) => (
            <Skill
              setIsSearching={setIsSearching}
              key={skill.id}
              skill={skill.skill}
            />
          ))}
        </span>
      </div>

      <Nav_Btn
            disabled={!isValid}
            handleRequest={handleRequest}
            navTo="/step4"
            btn_Style={`${
              isValid
                ? "bg-gray-950 text-opacity-100 text-white"
                : "text-opacity-40 cursor-not-allowed"
            }`}
          />
    </>
  );
}
