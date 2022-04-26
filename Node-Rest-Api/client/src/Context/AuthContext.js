import { createContext, useReducer } from "react";
import AuthReducer from './AuthReducer';
const INITIAL_STATE = {
  user: {
    _id:"62313af5398bffdb03122de1",
  username:"reggie",
  email
  :
  "binyam0022@gmail.com",
  profilePicture:"/assets/person/4.jpeg",
  coverPicture:"",
  followers:["62313adb398bffdb03122ddd"],
  following:""},
  error: false,
  isFetching: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
