import { userApi } from "../api/api";

const ADD_POST = "ADD-POST";
const POST_TEXT_CHANGE = "POST-TEXT-CHANGE";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";

const initialState = {
  postsData: [
    { id: 1, message: "Hi, how are you", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
  ],
  postText: "react good",
  profile: null,
};

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: Math.random(),
        message: state.postText,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        postText: "",
      };
    case POST_TEXT_CHANGE: {
      return { ...state, postText: action.text };
    }
    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export function textareaTextChangeActiionCreator(text) {
  return {
    type: POST_TEXT_CHANGE,
    text: text,
  };
}

export const setUsersProfileAC = (profile) => {
  return {
    type: SET_USERS_PROFILE,
    profile,
  };
};

export const getUsersProfileThunkCreator = (userId) => (dispatch) => {
  userApi
    .getProfile(userId)
    .then((response) => {
      dispatch(setUsersProfileAC(response.data));
    })
    .catch((error) => alert(error));
};
export default profilePageReducer;
