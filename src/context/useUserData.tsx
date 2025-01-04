import { create } from "zustand";
import { UserData } from "../utils/types/Types";

interface Data {
  user: UserData;
  setUser: (fetchedUser: UserData) => void;
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
  },
  setUser: (fetch) => set((state) => ({ user: (state.user = fetch) })),
}));
