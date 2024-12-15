import { create } from "zustand";

export const useUserStore = create((set) => ({
    userDetails: {
        name: "Vergil Ebong",
        email: "@ogvergil",
        location: "Nigeria",
        profileImage: "",
        area: "",
        stack: ["N/A", "N/A", "N/A"],
    },

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
            const updatedStack = state.userDetails.stack.map((item) => item === skill ? "N/A" : item);
            return {
                userDetails: { ...state.userDetails, stack: updatedStack }
            }
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
        useUserStore.getState().userDetails.stack.includes("N/A"),


}));
