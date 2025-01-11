import { create } from "zustand";

type State = {
  isEmpty: boolean;
  change: () => void;
  currentView: "Created" | "Requested";
  setCurrentView: (view: "Created" | "Requested") => void;
};

export const useUserProjects = create<State>((set) => ({
  isEmpty: true,
  currentView: "Created",
  change: () => set((state) => ({ isEmpty: !state.isEmpty })),
  setCurrentView: (view) =>
    set((state) => ({ currentView: (state.currentView = view) })),
}));
