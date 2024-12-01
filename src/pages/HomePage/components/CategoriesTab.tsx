import all from "/assets/all.svg";
import design from "/assets/design.svg";
import engineer from "/assets/engineer.svg";
import product from "/assets/product.svg";
import market from "/assets/market.svg";

const CategoriesTab = () => {
  return (
    <div className="h-[75px] py-4 pl-8 pr-14 flex gap-6 font-medium border-b border-solid border-gray200">
      <button className="h-10 w-[102px] rounded-[100px] border border-solid border-gray300">
        Filter
      </button>
      <div className="h-6 w-[2px]  bg-gray200 relative top-[10px]"></div>
      <div className="flex gap-4 text-gray700 w-[509px]">
        <div className="w-[89px] h-[43px] flex flex-col text-gray950 items-center justify-center gap-2">
          <img src={all} alt="" />
          All
        </div>
        <div className="w-[89px] h-[43px] flex flex-col items-center justify-center gap-2">
          <img src={design} alt="" />
          Design
        </div>
        <div className="w-[89px] h-[43px] flex flex-col items-center justify-center gap-2">
          <img src={engineer} alt="" />
          Engineering
        </div>
        <div className="w-[89px] h-[43px] flex flex-col items-center justify-center gap-2">
          <img src={product} alt="" />
          Product
        </div>
        <div className="w-[89px] h-[43px] flex flex-col items-center justify-center gap-2">
          <img src={market} alt="" />
          Marketing
        </div>
      </div>
    </div>
  );
};

export default CategoriesTab;
