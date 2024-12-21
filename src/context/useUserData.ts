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
  country: string;
  description: string;
  links: Links[];
  setLinks: (newLinks: Links[]) => void;
  suggestedLinks: Links[];
  setSuggestedLinks: (newLinks: Links[]) => void;
  skills: string[];
  addSkill: (newSkill: string[]) => void;
  removeSkill: (newSkill: string[]) => void;
  suggestedSkills: string[];
  setSuggestedSkills?: (newSkill: string[]) => void;
};

export const useUserData = create<State>((set) => ({
  username: "ogvergel",
  firstName: "Vergel",
  lastName: "Ebong",
  fullname: "Vergel Ebong",
  country: "string",
  description: "string",
  links: [],
  setLinks: (newLinks) => set((state) => ({ links: (state.links = newLinks) })),
  suggestedLinks: [
    { name: "Behance", url: "www.behance.net" },
    { name: "LinkedIn", url: "www.linkedIn.net" },
    { name: "x", url: "www.x.net" },
    { name: "fiverr", url: "www.fiverr.net" },
  ],
  setSuggestedLinks: (newLinks) =>
    set((state) => ({ suggestedLinks: (state.suggestedLinks = newLinks) })),
  skills: ["UI design", "User research", "UX design"],
  addSkill: (newSkill) =>
    set((state) => ({ skills: (state.skills = newSkill) })),
  removeSkill: (newSkill) =>
    set((state) => ({ skills: (state.skills = newSkill) })),
  suggestedSkills: ["Motion design", "Framer", "Branding", "Figma", "Sketch"],
}));
