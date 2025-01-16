import { create } from "zustand";

type State = {
  currentView: "Created" | "Requested";
  setCurrentView: (view: "Created" | "Requested") => void;
};

export const useUserProjects = create<State>((set) => ({
  currentView: "Created",
  setCurrentView: (view) =>
    set((state) => ({ currentView: (state.currentView = view) })),
}));
