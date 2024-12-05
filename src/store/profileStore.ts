import { create } from "zustand";

interface ProfileStore {
  userProfile: {
    firstName?: string;
    lastName?: string;
    username?: string;
    location?: string;
    areaOfExpertise?: string;
    skills?: string[];
  };
  updateProfile: (profile: Partial<ProfileStore['userProfile']>) => void
}

export const useProfileStore = create<ProfileStore>((set) => ({
  userProfile: {},

  updateProfile: (profile) => set((state) => ({
    userProfile:{...state.userProfile, ...profile}
  }))
}));
