import SecondaryButton from "../../../../components/SecondaryButton";
import PrimaryButton from "../../../../components/PrimaryButton";

const Skills = () => {
  return (
    <div className="flex flex-col gap-6 pt-6 h-[622px] w-full">
      <div className="flex flex-col h-[490px] gap-6 px-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <p className="font-normal text-sm text-gray800">
              Add atleast 3 of 10 skills or stacks
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-normal text-sm text-gray800">
              Suggested skills & stacks
            </p>
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
