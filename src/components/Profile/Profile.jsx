import MyPostHok from "./MyPosts/Post/MyPostHok";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = ({ profile }) => {
  return (
    <div className={classes.content}>
      <ProfileInfo profile={profile} />
      <MyPostHok />
    </div>
  );
};

export default Profile;
