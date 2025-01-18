type ReturnType = {
  header: string;
  height: string;
};

const usePageHeader = (): ReturnType => {
  let header = "";
  let height = "";

  switch (location.pathname) {
    case "/":
      header = "Collaborate";
      height = "md:h-[226px]";
      break;
    case "/project":
      header = "My Projects";
      height = "md:h-[190px]";
      break;
    case "/alert":
      header = "Activity";
      height = "md:h-[72px]";
      break;
    case "/profile":
      header = "Profile";
      height = "md:h-[72px]";
      break;
    default:
      header = "SyncU";
      height = "md:h-[72px]";
      break;
  }

  return { header, height };
};

export default usePageHeader;
