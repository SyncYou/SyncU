import { create } from "zustand";


interface UserDetails {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  countryOfResidence: string;
  photoUrl: string;
  areaOfExpertise: string;
  stacks: string[];
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
    countryOfResidence: "Nigeria",
    photoUrl: "",
    areaOfExpertise: "",
    stacks: ["N/A", "N/A", "N/A"],
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

    removeSkill: (skill: string) =>
      set((state) => {
        const updatedStack = state.userDetails.stacks.filter((item) => item !== skill);
        return {
          userDetails: { ...state.userDetails, stacks: updatedStack },
        };
      }),

    toggleSkill: (skill) =>
      set((state) => {
        const { stacks } = state.userDetails;
    
        
        if (stacks.includes(skill)) {
          const updatedStack = stacks.filter((item) => item !== skill);
          return {
            userDetails: { ...state.userDetails, stacks: updatedStack },
          };
        }
    

        let updatedStack = [...stacks, skill];
    

        updatedStack = updatedStack.filter((item) => item !== "N/A");
    
        return {
          userDetails: { ...state.userDetails, stacks: updatedStack },
        };
      }),
    
    
    

  isStackValid: () =>
    get().userDetails.stacks.includes("N/A"), 
}));
