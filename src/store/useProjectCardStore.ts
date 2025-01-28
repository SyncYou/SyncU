import { create } from "zustand";

const useProjectCardStore = create((set) => ({
  search: "",
  filterCards: [],
  projectFile: [],

  setSearch: (searchValue) =>
    set((state) => ({
      search: searchValue,
      filterCards:
        state.projectFile.filter((items) =>
          items.industry.toLowerCase().includes(searchValue.toLowerCase())
        ) ||
        items.required_roles.some((roles) =>
          roles.toLowerCase().includes(searchValue.toLowerCase())
        ) ||
        items.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        items.username.toLowerCase().includes(searchValue.toLowerCase()),
    })),

  setProjectFile: (projects) =>
    set((state) => ({
      projectFile: projects,
      filterCards:
        projects.filter((items) =>
          items.industry.toLowerCase().includes(state.search.toLowerCase())
        ) ||
        items.required_roles.some((roles) =>
          roles.toLowerCase().includes(state.search.toLowerCase())
        ) ||
        items.title.toLowerCase().includes(state.search.toLowerCase()) ||
        items.username.toLowerCase().includes(state.search.toLowerCase()),
    })),
}));

export default useProjectCardStore;
