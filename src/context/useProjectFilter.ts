import { create } from "zustand";

type Filters = "All" | "Design" | "Engineering" | "Product" | "Marketing";

type State = {
  filter: Filters;
  setFilter: (view: Filters) => void;
};

export const useProjectFilter = create<State>((set) => ({
  filter: "All",
  setFilter: (view) => set((state) => ({ filter: (state.filter = view) })),
}));
