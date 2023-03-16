import { useDispatch, useSelector } from "react-redux";
import { addPostActionCreator } from "../../../../redux/profilePageReducer";
import MyPosts from "../MyPosts";

const MyPostHok = () => {
  const dispatch = useDispatch();
  const profilePage = useSelector((state) => state.profilePage);
  const addPost = (postText) => {
    dispatch(addPostActionCreator(postText));
  };

  return <MyPosts addPost={addPost} profilePage={profilePage} />;
};

export default MyPostHok;
