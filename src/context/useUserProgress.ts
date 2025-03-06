import { create } from "zustand";

type State = {
  status: "Available" | "Occupied" | "Not available";
  isCompleted: boolean;
  progress: number;
  setStatus: (view: "Available" | "Occupied" | "Not available") => void;
};

export const useUserProgress = create<State>((set) => ({
  isCompleted: true,
  progress: 80,
  status: "Available",
  setStatus: (view) => set((state) => ({ status: (state.status = view) })),
}));
