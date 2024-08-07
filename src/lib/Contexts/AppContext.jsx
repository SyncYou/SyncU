import { createContext, useContext, useState } from "react";

export const AppState = createContext();

export const AppStateProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  return (
    <AppState.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </AppState.Provider>
  );
};

export const useAppContext = () => useContext(AppState);
