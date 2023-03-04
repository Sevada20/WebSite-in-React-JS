import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setUsersProfileAC } from "../../redux/profilePageReducer";
import Profile from "./Profile";
import classes from "./Profile.module.css";

const ProfileContainer = (props) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profilePage.profile);
  const params = useParams();

  const setUsersProfile = (profile) => {
    dispatch(setUsersProfileAC(profile));
  };

  if (!params.userId) params.userId = 8;

  useEffect(() => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${params.userId}`
      )
      .then((response) => {
        setUsersProfile(response.data);
      })
      .catch((error) => alert(error));
  }, []);
  return <Profile {...props} profile={profile} />;
};

export default ProfileContainer;
