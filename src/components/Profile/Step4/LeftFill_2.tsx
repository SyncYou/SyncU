import caret from "/signUp-imgs/CaretUpDown.svg";
import Nav_Btn from "../../Reuseables/Nav_Btn";
import { Skills } from "./Skills";
import { Skill } from "./Skill";
import { Modal2 } from "../../Reuseables/Modal2";
import { FaTimes } from "react-icons/fa";
import { useUserSkills } from "../../../hooks/useUserSkills";

interface Skill {
  id: number;
  skill: string;
  selected: boolean;
}

export default function LeftFill_2() {
  const {
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
    filteredSkills,
    handleSkillClick,
    handleRemoveSkill,
    handleRequest,
  } = useUserSkills();

  return (
    <>
      <section>
        <div className="md:p-5 flex flex-col w-full">
          <div className="gap-6 self-stretch flex-col" ref={activeRef}>
            <h3 className="text-gray-600 font-medium text-sm">STEP 4 of 5</h3>
            <div className="gap-3 flex-col">
              <h1 className="text-[1.5rem] md:text-[32px] font-semibold text-gray-950 mt-5">
                What are you skilled at?
              </h1>
              <p className="text-gray-800 text-base md:text-lg font-normal my-3">
                This will enable us to match you to projects that suit you.
              </p>
            </div>
          </div>

          <div className="gap-4 flex-col relative my-5 mt-3">
            <h3 className="text-gray-800 font-normal text-sm my-3">
              Add at least 3/10 skills or stacks
            </h3>
            <label htmlFor="skills">
                
              <span
                className={`flex w-full max-w-[28.5rem] items-start justify-between py-2 px-3 border border-solid h-[90%] bg-white rounded-lg ${
                  active
                    ? "border-brand-400 shadow-active-state"
                    : "border-gray-200"
                }`}
              >

                <span className="flex items-start flex-col gap-1 w-full h-36 ">
                  <p className="text-gray-950 text-xs font-medium">
                    Skills/stacks
                  </p>

                  <div className="gap-2 text-gray-950 w-full flex flex-wrap text-sm">
                      {userDetails.stacks.map(
                        (skill, index) =>
                          skill !== "N/A" && (
                            <span
                              key={index}
                              className={`${
                                skill === "N/A"
                                  ? "border-none"
                                  : "border flex flex-row gap-3 py-[0.2rem] w-fit rounded-full px-2 items-center justify-between cursor-pointer text-brand-600 bg-skill"
                              }`}
                              onClick={() => handleRemoveSkill(skill)}
                            >
                              <p className="text-brand-600">
                                {skill}
                                
                              </p>
                              <FaTimes className="text-brand-600 text-base font-thin" />
                            </span>
                          )
                      )}
                    </div>
  
                    <input
                      type="text"
                      id="skills"
                      name="skills"
                      className="text-gray-800 text-base font-medium w-full outline-none"
                      placeholder={userDetails.stacks.length? "" :"Type a skill or stack for e.g, UI design."}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      onClick={() => {
                        setActive(true);
                        setShowModal(true);
                      }}
                    />
  

        
                </span>
                <img src={caret} alt="caretUpDown" />
              </span>
            </label>

            <div className="absolute -bottom-2 w-full" ref={modalRef}>
              {showModal && (
                <Modal2
                  filteredSkills={filteredSkills}
                  handleSkillClick={handleSkillClick}
                />
              )}
            </div>
          </div>

          <div className="gap-2 flex-col">
            <h3 className="text-gray-800 font-normal text-sm my-3 mt-2">
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
          {!showModal && (
          <div className="pt-8">
              <Nav_Btn
                disabled={!isValid}
                showPrevious={true}
                handleRequest={handleRequest}
                navTo="/onboarding/profile-image"
                btn_Style={`w-[184px] ${
                  isValid
                    ? "bg-gray-950 text-opacity-100 text-white"
                    : "text-opacity-40 cursor-not-allowed"
                }`}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
