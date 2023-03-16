import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { withAuthRedirectCopy } from "../../hoc/withAuthRedirectCopy";
import {
  getStatusThunkCreator,
  getUsersProfileThunkCreator,
  updateStatusThunkCreator,
} from "../../redux/profilePageReducer";
import Profile from "./Profile";
import classes from "./Profile.module.css";

const ProfileContainer = (props) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profilePage.profile);
  const status = useSelector((state) => state.profilePage.status);
  const params = useParams();

  const setUsersProfile = (userId) => {
    dispatch(getUsersProfileThunkCreator(userId));
  };
  useEffect(() => {
    setUsersProfile(params.userId);
    dispatch(getStatusThunkCreator(params.userId));
  }, [params.userId]);

  const updateStatus = (status) => {
    dispatch(updateStatusThunkCreator(status));
  };
  if (!params.userId) params.userId = 8;
  return (
    <Profile
      {...props}
      profile={profile}
      status={status}
      updateStatus={updateStatus}
    />
  );
};

export default withAuthRedirectCopy(ProfileContainer);
