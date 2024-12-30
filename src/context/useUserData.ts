import { create } from "zustand";

interface Links {
  name: string;
  url: string;
}

type State = {
  username: string;
  firstName: string;
  lastName: string;
  fullname: string;
  photoUrl: string;
  email: string;
  countryOfResidence: string;
  areaOfExpertise: string;
  description: string;
  links: Links[];
  stacks: string[];
  suggestedSkills: string[];
  setSuggestedSkills?: (newSkill: string[]) => void;
};

export const useUserData = create<State>(() => ({
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
  suggestedSkills: ["Motion design", "Framer", "Branding", "Figma", "Sketch"],
}));
