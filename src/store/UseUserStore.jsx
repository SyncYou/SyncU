import { create } from "zustand"

export const useUserStore = create((set) => ({
    userDetails: {
        profileImage: "",
        area: "",
        stack: ""
    },

    currentStep: 1,
    setUserDetails: (key, value) => set((state) => ({
        userDetails: { ...state.userDetails, [key]: value },
    })),
    setCurrentStep: (step) => set(() => ({ currentStep: step })),

}))