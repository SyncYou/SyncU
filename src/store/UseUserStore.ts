import { create } from "zustand";


interface UserDetails {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  location: string;
  profileImage: string;
  area: string;
  stack: string[];
}

interface UserStore {
  userDetails: UserDetails;
  currentStep: number; 
  setUserDetails: (key: keyof UserDetails, value: string) => void;
  setCurrentStep: (step: number) => void;
  removeSkill: (skill: string) => void;
  toggleSkill: (skill: string) => void;
  isStackValid: () => boolean;
}

export const useUserStore = create<UserStore>((set, get) => ({
  userDetails: {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    location: "Nigeria",
    profileImage: "",
    area: "",
    stack: ["N/A", "N/A", "N/A"],
  },
  currentStep: 1, 
  setUserDetails: (key, value) =>
    set((state) => ({
      userDetails: {
        ...state.userDetails,
        [key]: value,
      },
    })),

  setCurrentStep: (step) =>
    set(() => ({
      currentStep: step,
    })),

  removeSkill: (skill) =>
    set((state) => {
      const updatedStack = state.userDetails.stack.map((item) =>
        item === skill ? "N/A" : item
      );
      return {
        userDetails: { ...state.userDetails, stack: updatedStack },
      };
    }),

  toggleSkill: (skill) =>
    set((state) => {
      const alreadyExists = state.userDetails.stack.includes(skill);
      if (alreadyExists) {
        const updatedStack = state.userDetails.stack.map((item) =>
          item === skill ? "N/A" : item
        );
        return {
          userDetails: { ...state.userDetails, stack: updatedStack },
        };
      } else {
        const updatedStack = [...state.userDetails.stack];
        const index = updatedStack.findIndex((item) => item === "N/A");
        if (index !== -1) updatedStack[index] = skill;
        return {
          userDetails: { ...state.userDetails, stack: updatedStack },
        };
      }
    }),

  isStackValid: () =>
    get().userDetails.stack.includes("N/A"), 
}));
