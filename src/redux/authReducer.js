import { authApi } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
}

export const setUserDataAC = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});

export const getAuthUsersDataThunkCreator = () => (dispatch) => {
  authApi.me().then((response) => {
    const { id, email, login } = response.data.data;
    if (response.data.resultCode === 0) {
      dispatch(setUserDataAC(id, email, login));
    }
  });
};

export default authReducer;
