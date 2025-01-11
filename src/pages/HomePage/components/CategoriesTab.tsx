import { AiOutlineAppstore } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { BiBarChart } from "react-icons/bi";
import { FiCode, FiFilter } from "react-icons/fi";
import { FaVectorSquare } from "react-icons/fa";

const CategoriesTab = () => {
  return (
    <div className="h-[75px] py-4 px-4 md:pl-8 md:pr-14 bg-white flex gap-6 font-medium border-b border-t border-gray200">
      <div className="flex gap-4 text-gray700 md:overflow-hidden overflow-x-scroll w-[509px]">
        <div className="min-w-[89px] h-[43px] flex flex-col text-gray950 items-center justify-center">
          <div className="text-[20px]">
            <AiOutlineAppstore className="" />
          </div>
          All
        </div>
        <div className="min-w-[89px] h-[43px] flex flex-col hover:text-gray950 items-center justify-center">
          <div className="text-[20px]">
            <FaVectorSquare className="" />
          </div>
          Design
        </div>
        <div className="min-w-[89px] h-[43px] flex flex-col hover:text-gray950 items-center justify-center">
          <div className="text-[20px]">
            <FiCode className="" />
          </div>
          Engineering
        </div>
        <div className="min-w-[89px] h-[43px] flex flex-col hover:text-gray950 items-center justify-center">
          <div className="text-[20px]">
            <BsEmojiSmile className="" />
          </div>
          Product
        </div>
        <div className="min-w-[89px] h-[43px] flex flex-col hover:text-gray950 items-center justify-center">
          <div className="text-[20px]">
            <BiBarChart className="" />
          </div>
          Marketing
        </div>
      </div>
      <div className="h-6 w-[2px]  bg-gray200 relative top-[10px]"></div>
      <button className="h-10 min-w-[102px] rounded-[100px] border border-solid border-gray300">
        <FiFilter className="inline text-base mr-1" />
        Filter
      </button>
    </div>
  );
};

export default CategoriesTab;
