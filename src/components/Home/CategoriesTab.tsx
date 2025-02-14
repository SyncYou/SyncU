import { AiOutlineAppstore } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { RiCodeSSlashLine } from "react-icons/ri";
import { useProjectFilter } from "../../context/useProjectFilter";

const CategoriesTab = () => {
  const { filter, setFilter } = useProjectFilter();

  return (
    <div className="h-[75px]  px-4 md:pl-8 md:pr-14 bg-white flex gap-6 font-medium border-b border-t border-gray200">
      <div className="flex gap-5 text-gray700 md:overflow-hidden overflow-x-scroll scrollbar-none px-3">
        <div
          onClick={() => setFilter("All")}
          className={`min-w-[89px]  flex flex-col gap-2 text-gray950 items-center justify-center cursor-pointer ${filter === 'All'? 'opacity-100 border-b-[3px] border-b-[#8333D0]' : 'opacity-70'}`}
        >
          <div className="text-[20px]">
            <AiOutlineAppstore className="text-2xl" />
          </div>
          <span className="text-xs">All</span>
        </div>
        <div
          onClick={() => setFilter("Design")}
          className={`min-w-[89px] hover:opacity-100 flex flex-col gap-2 text-gray950 items-center justify-center cursor-pointer ${filter === 'Design'? 'opacity-100 border-b-[3px] border-b-[#8333D0]' : 'opacity-70'}`}
        >
          <div className="text-[20px]">
            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.41675 10.8337V4.16699M10.3334 2.91699H3.66675M12.8334 1.66699H10.3334V4.16699H12.8334V1.66699ZM3.66675 1.66699H1.16675V4.16699H3.66675V1.66699ZM3.66675 10.8337H1.16675V13.3337H3.66675V10.8337ZM17.8334 10.0003L6.16675 6.66699L9.50008 18.3337L11.5834 12.0837L17.8334 10.0003Z" stroke="#2a2a33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
          <span className="text-xs">Design</span>
        </div>
        <div
          onClick={() => setFilter("Engineering")}
          className={`min-w-[89px]  flex flex-col gap-2 text-gray950 items-center justify-center cursor-pointer ${filter === 'Engineering'? 'opacity-100 border-b-[3px] border-b-[#8333D0]' : 'opacity-70'}`}
        >
          <div className="text-[20px]">
            <RiCodeSSlashLine className="" />
          </div>
          <span className="text-xs">Engineering</span>
        </div>
        <div
          onClick={() => setFilter("Product")}
          className={`min-w-[89px]  flex flex-col hover:opacity-100 gap-2 text-gray950 items-center justify-center cursor-pointer ${filter === 'Product'? 'opacity-100 border-b-[3px] border-b-[#8333D0]' : 'opacity-70'}`}
        >
          <div className="text-[20px]">
            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.70833 1.87533C5.10596 1.87533 1.375 5.60629 1.375 10.2087C1.375 14.811 5.10596 18.542 9.70833 18.542C14.3107 18.542 18.0417 14.811 18.0417 10.2087C18.0417 9.63791 17.9842 9.08049 17.875 8.54199M6.16667 12.5003C6.92677 13.5123 8.13692 14.167 9.5 14.167C10.8631 14.167 12.0732 13.5123 12.8333 12.5003M7.83333 7.91699H6.75593C6.37863 7.91699 6.01678 8.06688 5.75 8.33366M11.1667 7.91699H12.2441C12.6213 7.91699 12.9832 8.06688 13.25 8.33366M16.9168 1.88554C15.7527 1.29229 14.9167 2.09482 14.9167 2.09482C14.9167 2.09482 14.0807 1.29229 12.9164 1.88553C11.5063 2.60406 11.4051 5.41784 14.9167 6.66699C18.4283 5.41784 18.327 2.60406 16.9168 1.88554Z" stroke="#2a2a33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <span className="text-xs">Product</span>
        </div>
        <div
          onClick={() => setFilter("Marketing")}
          className={`min-w-[89px]  flex flex-col gap-2 hover:opacity-100 text-gray950 items-center justify-center cursor-pointer ${filter === 'Marketing'? 'opacity-100 border-b-[3px] border-b-[#8333D0]' : 'opacity-70'}`}
        >
          <div className="text-[20px]">
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.25008 17.25H3.08341V15.75H2.25008V17.25ZM3.08341 17.25C3.95785 17.25 4.66675 16.5411 4.66675 15.6667H3.16675C3.16675 15.7127 3.12944 15.75 3.08341 15.75V17.25ZM4.66675 15.6667V9H3.16675V15.6667H4.66675ZM4.66675 9C4.66675 8.12553 3.95785 7.41667 3.08341 7.41667V8.91667C3.12944 8.91667 3.16675 8.95397 3.16675 9H4.66675ZM3.08341 7.41667H2.25008V8.91667H3.08341V7.41667ZM2.25008 7.41667C1.37564 7.41667 0.666748 8.12553 0.666748 9H2.16675C2.16675 8.95397 2.20405 8.91667 2.25008 8.91667V7.41667ZM0.666748 9V15.6667H2.16675V9H0.666748ZM0.666748 15.6667C0.666748 16.5411 1.37564 17.25 2.25008 17.25V15.75C2.20405 15.75 2.16675 15.7127 2.16675 15.6667H0.666748ZM8.08342 17.2496H8.91675V15.7496H8.08342V17.2496ZM8.91675 17.2496C9.79121 17.2496 10.5001 16.5407 10.5001 15.6663H9.00008C9.00008 15.7123 8.96278 15.7496 8.91675 15.7496V17.2496ZM10.5001 15.6663V10.6667H9.00008V15.6663H10.5001ZM10.5001 10.6667C10.5001 9.7922 9.79121 9.08333 8.91675 9.08333V10.5833C8.96279 10.5833 9.00008 10.6206 9.00008 10.6667H10.5001ZM8.91675 9.08333H8.08342V10.5833H8.91675V9.08333ZM8.08342 9.08333C7.20895 9.08333 6.50008 9.7922 6.50008 10.6667H8.00008C8.00008 10.6206 8.03738 10.5833 8.08342 10.5833V9.08333ZM6.50008 10.6667V15.6663H8.00008V10.6667H6.50008ZM6.50008 15.6663C6.50008 16.5407 7.20895 17.2496 8.08342 17.2496V15.7496C8.03738 15.7496 8.00008 15.7123 8.00008 15.6663H6.50008ZM13.9167 17.25H14.7501V15.75H13.9167V17.25ZM14.7501 17.25C15.6245 17.25 16.3334 16.5411 16.3334 15.6667H14.8334C14.8334 15.7127 14.7961 15.75 14.7501 15.75V17.25ZM16.3334 15.6667V7.33333H14.8334V15.6667H16.3334ZM16.3334 7.33333C16.3334 6.4589 15.6246 5.75 14.7501 5.75V7.25C14.7961 7.25 14.8334 7.2873 14.8334 7.33333H16.3334ZM14.7501 5.75H13.9167V7.25H14.7501V5.75ZM13.9167 5.75C13.0423 5.75 12.3334 6.4589 12.3334 7.33333H13.8334C13.8334 7.2873 13.8707 7.25 13.9167 7.25V5.75ZM12.3334 7.33333V15.6667H13.8334V7.33333H12.3334ZM12.3334 15.6667C12.3334 16.5411 13.0423 17.25 13.9167 17.25V15.75C13.8707 15.75 13.8334 15.7127 13.8334 15.6667H12.3334ZM3.16675 4.41667C3.16675 4.69281 2.94289 4.91667 2.66675 4.91667V6.41667C3.77132 6.41667 4.66675 5.52124 4.66675 4.41667H3.16675ZM2.66675 4.91667C2.3906 4.91667 2.16675 4.69281 2.16675 4.41667H0.666748C0.666748 5.52124 1.56218 6.41667 2.66675 6.41667V4.91667ZM2.16675 4.41667C2.16675 4.14052 2.3906 3.91667 2.66675 3.91667V2.41667C1.56218 2.41667 0.666748 3.31209 0.666748 4.41667H2.16675ZM2.66675 3.91667C2.94289 3.91667 3.16675 4.14052 3.16675 4.41667H4.66675C4.66675 3.31209 3.77132 2.41667 2.66675 2.41667V3.91667ZM14.8334 2.75C14.8334 3.02614 14.6095 3.25 14.3334 3.25V4.75C15.438 4.75 16.3334 3.85458 16.3334 2.75H14.8334ZM14.3334 3.25C14.0573 3.25 13.8334 3.02614 13.8334 2.75H12.3334C12.3334 3.85458 13.2289 4.75 14.3334 4.75V3.25ZM13.8334 2.75C13.8334 2.47386 14.0573 2.25 14.3334 2.25V0.75C13.2289 0.75 12.3334 1.64542 12.3334 2.75H13.8334ZM14.3334 2.25C14.6095 2.25 14.8334 2.47386 14.8334 2.75H16.3334C16.3334 1.64542 15.438 0.75 14.3334 0.75V2.25ZM9.00008 6.08333C9.00008 6.35947 8.77621 6.58333 8.50008 6.58333V8.08333C9.60462 8.08333 10.5001 7.18791 10.5001 6.08333H9.00008ZM8.50008 6.58333C8.22395 6.58333 8.00008 6.35947 8.00008 6.08333H6.50008C6.50008 7.18791 7.39554 8.08333 8.50008 8.08333V6.58333ZM8.00008 6.08333C8.00008 5.8072 8.22395 5.58333 8.50008 5.58333V4.08333C7.39554 4.08333 6.50008 4.97875 6.50008 6.08333H8.00008ZM8.50008 5.58333C8.77621 5.58333 9.00008 5.8072 9.00008 6.08333H10.5001C10.5001 4.97875 9.60462 4.08333 8.50008 4.08333V5.58333ZM3.6635 5.48113L7.09237 6.46083L7.50446 5.01854L4.07559 4.03885L3.6635 5.48113ZM9.95827 6.11407L13.6206 4.0213L12.8764 2.71894L9.21406 4.81171L9.95827 6.11407Z" fill="#2a2a33"/>
            </svg>

          </div>
          <span className="text-xs">Marketing</span>
        </div>
      </div>
      <div className="h-6 w-[2px]  bg-gray200 relative top-[10px]"></div>
      <div className="flex h-full items-center">
        <button className="h-10 min-w-[102px] rounded-[100px] border border-solid border-gray300">
          <FiFilter className="inline text-base mr-1" />
          Filter
        </button>
      </div>
    </div>
  );
};

export default CategoriesTab;
