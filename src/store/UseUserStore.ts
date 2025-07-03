import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserDetails {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  countryOfResidence: string;
  photoUrl: string;
  areaOfExpertise: string;
  links: string[];
  description: string;
  stacks: string[];
  onboardingComplete: boolean | string;
}

interface UserStore {
  userDetails: UserDetails;
  currentStep: number;
  setUserDetails: (details: Partial<UserDetails>) => void;
  setCurrentStep: (step: number) => void;
  removeSkill: (skill: string) => void;
  toggleSkill: (skill: string) => void;
  isStackValid: () => boolean;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      userDetails: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        countryOfResidence: "Nigeria",
        photoUrl: "",
        areaOfExpertise: "",
        links: [],
        description: "",
        stacks: ["N/A", "N/A", "N/A"],
        onboardingComplete: 'false',
      },
      currentStep: 1,

      setUserDetails: (details) =>
        set((state) => ({
          userDetails: {
            ...state.userDetails,
            ...details,
          },
        })),

      setCurrentStep: (step) =>
        set(() => ({
          currentStep: step,
        })),

      removeSkill: (skill: string) =>
        set((state) => {
          const updatedStack = state.userDetails.stacks.filter(
            (item) => item !== skill
          );
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

      isStackValid: () => get().userDetails.stacks.includes("N/A"),
    }),
    {
      name: 'user-store',
      partialize: (state) => ({
        userDetails: state.userDetails,
        currentStep: state.currentStep,
      }),
    }
  )
);
