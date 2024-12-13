type ReturnType = {
  header: string;
  height: string;
};

const usePageHeader = (): ReturnType => {
  let header = "";
  let height = "";

  if (location.pathname == "/") {
    header = "Collaborate";
    height = "md:h-[226px]";
  } else if (location.pathname == "/project") {
    header = "My Projects";
    height = "md:h-[190px]";
  } else if (location.pathname == "/alert") {
    header = "Activity";
    height = "md:h-[72px]";
  } else if (location.pathname == "/profile") {
    header = "Profile";
    height = "md:h-[72px]";
  } else {
    header = "SyncU";
    height = "md:h-[72px]";
  }
  return { header, height };
};

export default usePageHeader;
