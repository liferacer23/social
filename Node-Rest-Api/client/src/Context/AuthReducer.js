const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        error: false,
        isFetching: true,
      };
    case "LOGIN_SUCCESS":
        return {
            user: action.payload,
            error: false,
            isFetching: false,
          };
    case "LOGIN_FAILED":
      return {
        user: null,
        error: action.payload,
        isFetching: false,
      };
      default:
          return state
  }
};

export default AuthReducer;
