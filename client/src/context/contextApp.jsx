import axios from "axios";
import { useReducer, useContext, createContext } from "react";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
} from "./action";
import reducer from "./reducer";

const user = window.localStorage.getItem("user");
const token = window.localStorage.getItem("token");
const userLocation = window.localStorage.getItem("location");

export const initialState = {
  isLoading: false,
  showAlert: true,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",
  jobLocation: userLocation || "",
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

  const saveUserToLocalStorage = ({ user, token, location }) => {
    window.localStorage.setItem("user", JSON.stringify(user));
    window.localStorage.setItem("token", JSON.stringify(token));
    window.localStorage.setItem("location", JSON.stringify(location));
  };

  const removeUserFromLocalStorage = ({ user, token, location }) => {
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("location");
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const { data } = await axios.post(
        "/api/v1/authenticate/register",
        currentUser
      );
      console.log(data);
      const { user, token, location } = data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: {
          user,
          token,
          location,
        },
      });
      saveUserToLocalStorage({ user, token, location });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.data.msg },
      });
    }
    alertClear();
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        alertDisplay,
        registerUser,
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
