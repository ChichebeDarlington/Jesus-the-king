import { useState, useReducer, useContext, createContext } from "react";
import { DISPLAY_ALERT, CLEAR_ALERT } from "./action";
import reducer from "./reducer";

export const initialState = {
  isLoading: false,
  showAlert: true,
  alertText: "",
  alertType: "",
};
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const alertDisplay = () => {
    dispatch({ type: DISPLAY_ALERT });
    alertClear();
  };

  const alertClear = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 5000);
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        alertDisplay,
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
