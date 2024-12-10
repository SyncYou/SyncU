import { create } from "zustand";

type State = {
  isEmpty: boolean;
  change: () => void;
};

export const useUserProjects = create<State>((set) => ({
  isEmpty: true,
  change: () => set((state) => ({ isEmpty: !state.isEmpty })),
}));
