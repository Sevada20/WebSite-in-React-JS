import { useDispatch, useSelector } from "react-redux";
import {
  addPostActionCreator,
  textareaTextChangeActiionCreator,
} from "../../../../redux/profilePageReducer";
import MyPosts from "../MyPosts";

const MyPostHok = () => {
  const dispatch = useDispatch();
  const profilePage = useSelector((state) => state.profilePage);
  const addPost = () => {
    dispatch(addPostActionCreator());
  };
  const textareaTextChange = (text) => {
    dispatch(textareaTextChangeActiionCreator(text));
  };

  return (
    <MyPosts
      addPost={addPost}
      textareaTextChange={textareaTextChange}
      profilePage={profilePage}
    />
  );
};

export default MyPostHok;
