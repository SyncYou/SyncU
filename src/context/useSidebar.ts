import { create } from "zustand";

type State = {
  isOpen: boolean;
  change: () => void;
};

export const useSidebar = create<State>((set) => ({
  isOpen: true,
  change: () => set((state) => ({ isOpen: !state.isOpen })),
}));
