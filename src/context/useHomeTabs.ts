import { create } from "zustand";

type Views = "Projects" | "People";

type State = {
  view: Views;
  setView: (newView: Views) => void;
};

export const useHomeTabs = create<State>((set) => ({
  view: "Projects",
  setView: (newView) => set((state) => ({ view: (state.view = newView) })),
}));
