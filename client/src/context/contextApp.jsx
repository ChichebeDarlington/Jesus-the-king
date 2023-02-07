import { useState, useReducer, useContext, createContext } from "react";

export const initialState = {
  isLoading: false,
  showAlert: true,
  alertText: "",
  alertType: "",
};
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useContextApp = () => {
  return useContext(AppContext);
};

export { AppProvider };
