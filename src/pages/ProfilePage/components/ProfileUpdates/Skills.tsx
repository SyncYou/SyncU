import SecondaryButton from "../../../../components/SecondaryButton";
import PrimaryButton from "../../../../components/PrimaryButton";
import { useUserData } from "../../../../context/useUserData";
import { useState } from "react";

const Skills = () => {
  const { skills, addSkill, suggestedSkills } = useUserData();
  const [newSkill, setNewSkill] = useState("");

  const handleSkillAdd = (text: string) => {
    const newSkills = [...skills, text];

    addSkill(newSkills);
  };

  return (
    <div className="flex flex-col gap-6 pt-6 h-[622px] w-full">
      <div className="flex flex-col h-[490px] gap-6 px-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="font-normal text-sm text-gray800">
              Add atleast 3 of 10 skills or stacks
            </p>
            <div
              className="w-[578px] h-[129px] p-2 relative border-gray200
                outline-none border rounded-lg"
            >
              <h3 className="font-medium text-gray950 text-xs">
                Skills/stacks
              </h3>
              <div className="pt-2 flex flex-wrap gap-2">
                {skills.map((skill, i) => {
                  return (
                    <span
                      key={i}
                      className="bg-[#F3ECFC] border border-[#D5BDF366] text-brand600 font-normal text-sm px-2 py-1 rounded-3xl space-x-1 cursor-pointer"
                    >
                      {skill} <span className="ml-1">&times;</span>
                    </span>
                  );
                })}
                <input
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  type="text"
                  className="outline-none border-none inline-block"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p
              onClick={() => handleSkillAdd(newSkill)}
              className="font-normal text-sm text-gray800"
            >
              Suggested skills & stacks
            </p>
            <div className="flex flex-wrap gap-2">
              {suggestedSkills.map((skill, i) => {
                return (
                  <button
                    onClick={() => handleSkillAdd(skill)}
                    key={i}
                    className="border border-gray300 hover:bg-gray200 font-normal text-sm px-2 py-1 rounded-3xl space-x-1 cursor-pointer"
                  >
                    {skill} <span className="ml-1">+</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[84px] border-t border-gray200 px-8 pb-6 pt-4 flex justify-end  gap-4">
        <PrimaryButton disabled={true} classes="w-[120px] h-11 gap-0">
          Save
        </PrimaryButton>
        <SecondaryButton classes="w-[120px] h-11 gap-0">Cancel</SecondaryButton>
      </div>
    </div>
  );
};

export default Skills;
