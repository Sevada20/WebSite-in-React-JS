import { profileApi, userApi } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
  postsData: [
    { id: 1, message: "Hi, how are you", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
  ],
  profile: null,
  status: "",
};

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: Math.random(),
        message: action.postText,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        postText: "",
      };

    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (postText) => {
  return {
    type: ADD_POST,
    postText,
  };
};

export const setUsersProfileAC = (profile) => {
  return {
    type: SET_USERS_PROFILE,
    profile,
  };
};

export const setStatusAC = (status) => ({
  type: SET_STATUS,
  status,
});

export const getUsersProfileThunkCreator = (userId) => (dispatch) => {
  userApi
    .getProfile(userId)
    .then((response) => {
      dispatch(setUsersProfileAC(response.data));
    })
    .catch((error) => alert(error));
};

export const getStatusThunkCreator = (userId) => (dispatch) => {
  profileApi.getStatus(userId).then((response) => {
    dispatch(setStatusAC(response.data));
  });
};
export const updateStatusThunkCreator = (status) => (dispatch) => {
  profileApi.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatusAC(response.data));
    }
  });
};

export default profilePageReducer;
