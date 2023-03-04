import { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  followThunkCreator,
  getUsersThunkCreator,
  unFollowThunkCreator,
} from "../../redux/users-reducer";
import Users from "./Users";

class UsersApiComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.usersPageSize);
  }

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <h1>Loading</h1>
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            isLoading={this.props.isLoading}
            followingProgress={this.props.followingProgress}
            onPageChanged={this.props.onPageChanged}
          />
        )}
      </>
    );
  }
}

const UsersHoc = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersPage.users);
  const pageSize = useSelector((state) => state.usersPage.pageSize);
  const totalUsersCount = useSelector(
    (state) => state.usersPage.totalUsersCount
  );
  const currentPage = useSelector((state) => state.usersPage.currentPage);
  const isLoading = useSelector((state) => state.usersPage.isLoading);
  const followingProgress = useSelector(
    (state) => state.usersPage.followingProgress
  );

  const follow = (userId) => {
    dispatch(followThunkCreator(userId));
  };
  const unFollow = (userId) => {
    dispatch(unFollowThunkCreator(userId));
  };

  const getUsersThunk = (currentPage, usersPageSize) => {
    dispatch(getUsersThunkCreator(currentPage, usersPageSize));
  };

  const onPageChanged = (pageNumber) => {
    dispatch(getUsersThunkCreator(pageNumber, pageSize));
  };

  return (
    <UsersApiComponent
      {...{
        follow,
        unFollow,
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isLoading,
        followingProgress,
        getUsersThunk,
        onPageChanged,
      }}
    />
  );
};
export default UsersHoc;
