import { createContext, useContext, useState } from "react";

export const AppState = createContext();

export const AppStateProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(true)
  return (
    <AppState.Provider
      value={{
        search,
        setSearch,
        showModal,
        setShowModal
      }}
    >
      {children}
    </AppState.Provider>
  );
};

export const useAppContext = () => useContext(AppState);
