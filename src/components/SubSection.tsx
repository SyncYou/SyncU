import X from "/assets/X.svg";

const SubSection = ({
  header,
  state,
}: {
  header?: string;
  state?: () => void;
}) => {
  return (
    <div className="flex justify-between h-[72px] items-center py-3 px-8 border-b border-gray200">
      <h1 className="font-semibold text-lg text-gray950">{header}</h1>
      <img className="cursor-pointer" onClick={state} src={X} alt="" />
    </div>
  );
};

export default SubSection;
