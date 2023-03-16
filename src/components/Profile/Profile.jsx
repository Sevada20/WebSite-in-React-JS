import MyPostHok from "./MyPosts/Post/MyPostHok";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = ({ profile, status, updateStatus }) => {
  return (
    <div className={classes.content}>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
      />
      <MyPostHok />
    </div>
  );
};

export default Profile;
