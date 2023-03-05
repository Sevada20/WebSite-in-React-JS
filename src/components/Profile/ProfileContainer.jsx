import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { withAuthRedirectCopy } from "../../hoc/withAuthRedirectCopy";
import { getUsersProfileThunkCreator } from "../../redux/profilePageReducer";
import Profile from "./Profile";
import classes from "./Profile.module.css";

const ProfileContainer = (props) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profilePage.profile);
  const params = useParams();

  useEffect(() => {
    setUsersProfile(params.userId);
  }, []);

  const setUsersProfile = (userId) => {
    dispatch(getUsersProfileThunkCreator(userId));
  };

  if (!params.userId) params.userId = 8;
  return <Profile {...props} profile={profile} />;
};

export default withAuthRedirectCopy(ProfileContainer);
