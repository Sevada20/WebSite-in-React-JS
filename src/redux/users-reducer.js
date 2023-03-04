import { userApi } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SETUSERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE = "TOGGLE";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";
const initialState = {
  users: [],
  pageSize: 6,
  totalUsersCount: 20,
  currentPage: 1,
  isLoading: false,
  followingProgress: [],
};
function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SETUSERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case TOGGLE:
      return {
        ...state,
        isLoading: action.fetching,
      };
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingProgress: action.following
          ? [...state.followingProgress, action.id]
          : state.followingProgress.filter((id) => id !== action.id),
      };

    default:
      return state;
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SETUSERS, users });
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCountAC = (totalCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
});
export const toggleFuncAC = (fetching) => ({
  type: TOGGLE,
  fetching,
});
export const toggleFollowingProgressAC = (following, userId) => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  following,
  userId,
});

export const getUsersThunkCreator = (currentPage, usersPageSize) => {
  return (dispatch) => {
    dispatch(toggleFuncAC(true));
    dispatch(setCurrentPageAC(currentPage));
    userApi.getUsers(currentPage, usersPageSize).then((data) => {
      dispatch(toggleFuncAC(false));
      dispatch(setUsersAC(data.items));
      dispatch(setTotalUsersCountAC(data.totalCount));
    });
  };
};

export const followThunkCreator = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgressAC(true, userId));
  userApi
    .getFollow(userId)
    .then(() => {
      dispatch(followAC(userId));
      dispatch(toggleFollowingProgressAC(false, userId));
    })
    .catch((error) => alert(error));
};

export const unFollowThunkCreator = (userId) => (dispatch) => {
  dispatch(toggleFollowingProgressAC(true, userId));
  userApi
    .getUnFollow(userId)
    .then(() => {
      dispatch(unFollowAC(userId));
      dispatch(toggleFollowingProgressAC(false, userId));
    })
    .catch((error) => alert(error));
};

export default usersReducer;
