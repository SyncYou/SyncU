import logo from "/assets/Union.svg";

type PropsType = {
  key: number;
};

const ProjectCard = ({ key }: PropsType) => {
  return (
    <div key={key} className="h-[302px] md:max-w-[304px] max-w-[358px]">
      <div className="w-full h-[46px] relative">
        <img src={logo} alt="" className="absolute bottom-0 left-0" />
        {/* <div className="w-[112.72px] h-[17.41px] border-r-[19px] border-b-[17.41px] border-r-transparent border-b-ash"></div>
        <div className="rounder h-[28.59px] w-full border-r border-l border-[#d9d9d9] bg-ash"></div> */}
      </div>
      <div className="w-full h-[256px] relative bg-ash rounded-b-md border border-t-0 border-solid border-gray200"></div>
    </div>
  );
};

export default ProjectCard;
