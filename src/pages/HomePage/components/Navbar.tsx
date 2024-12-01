import CategoriesTab from "./CategoriesTab";
import ProjectTag from "./ProjectTag";
import user from "/assets/avatar.svg";

const Navbar = () => {
  return (
    <nav className="top-0 right-0 w-full sticky bg-white">
      <div className="text-lg font-semibold h-[76px] w-full flex justify-between items-center py-4 pr-14 pl-8 border-b border-solid border-gray200">
        <span>Collaborate</span>
        <div className="">
          <input
            type="text"
            className="w-[479px] h-11 outline-none rounded-full border py-[10px] px-4"
            placeholder="Search for people or projects..."
          />
        </div>
        <div className="w-48 flex gap-6">
          <button className="w-[139px] h-8 rounded-[32px] py-1 px-4 text-gray100 bg-gray950 text-sm">
            New Project
          </button>
          <img src={user} alt="user" />
        </div>
      </div>
      <div>
        <ProjectTag />
        <CategoriesTab />
      </div>
    </nav>
  );
};

export default Navbar;
