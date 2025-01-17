import { create } from "zustand";
import { ProjectType, UserData } from "../utils/types/Types";

interface Data {
  user: UserData;
  setUser: (fetchedUser: UserData) => void;
}
interface Project {
  projects?: ProjectType[];
  setProjects: (fetchedUser?: ProjectType[]) => void;
}

export const useUserData = create<Data>((set) => ({
  user: {
    username: "ogvergel",
    firstName: "Vergel",
    lastName: "Ebong",
    fullname: "",
    photoUrl: "",
    email: "",
    countryOfResidence: "Nigeria",
    areaOfExpertise: "Product designer",
    description: "",
    links: [],
    stacks: ["UI design", "User research", "UX design"],
    notifications: [],
  },
  setUser: (fetch) => set((state) => ({ user: (state.user = fetch) })),
}));

export const useProjects = create<Project>((set) => ({
  projects: [],
  setProjects: (fetch) =>
    set((state) => ({ projects: (state.projects = fetch) })),
}));
