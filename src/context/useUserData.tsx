import { create } from "zustand";
import { NotificationType, ProjectType, UserData } from "../utils/types/Types";

interface Data {
  user: UserData;
  setUser: (fetchedUser: UserData) => void;
}
interface Project {
  projects?: ProjectType[];
  setProjects: (fetchedUser?: ProjectType[]) => void;
}

interface Alerts {
  alerts?: NotificationType[];
  setAlerts: (fetchedAlerts?: NotificationType[]) => void;
}

export const useUserData = create<Data>((set) => ({
  user: {
    id: "",
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
  },
  setUser: (fetch) => set((state) => ({ user: (state.user = fetch) })),
}));

export const useProjects = create<Project>((set) => ({
  projects: [],
  setProjects: (fetch) =>
    set((state) => ({ projects: (state.projects = fetch) })),
}));

export const useAlerts = create<Alerts>((set) => ({
  alerts: [],
  setAlerts: (fetch) => set((state) => ({ alerts: (state.alerts = fetch) })),
}));
