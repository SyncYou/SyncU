import { create } from "zustand";

interface State {
  show: boolean;
  setShow: (newItem: boolean) => void;
}

const useDisplayPostProjectForm = create<State>((set) => ({
  show: false,
  setShow: (newItem) => set((state) => ({ show: (state.show = newItem) })),
}));

export default useDisplayPostProjectForm;
