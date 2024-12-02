import logo from "/assets/logo.svg";
import user from "/assets/avatar.svg";

const SideBar = () => {
  return (
    <aside className="h-screen fixed md:block hidden top-0 left-0 z-0 w-[239px] pl-8 py-6 pr-4 bg-ash text-gray700 font-medium text-base">
      <div className="block">
        <img src={logo} alt="logo" />
      </div>
      <div className="w-[191px] my-8">
        <div className="h-[40px] px-3 py-2 hover:bg-[#E6E6F0B2] hover:text-gray950 rounded-sm">
          Collaborate
        </div>
        <div className="h-[40px] px-3 py-2 hover:bg-[#E6E6F0B2] hover:text-gray950 rounded-sm">
          My Projects
        </div>
        <div className="h-[40px] px-3 py-2 hover:bg-[#E6E6F0B2] hover:text-gray950 rounded-sm">
          Alerts
        </div>
      </div>
      <div className="flex w-[191px] items-center h-12 px-3 py-2 gap-2">
        <img src={user} alt="user-logo" />
        <span>Me</span>
      </div>
    </aside>
  );
};

export default SideBar;
