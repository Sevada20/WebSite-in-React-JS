import { useRef } from "react";
import classes from "./MyPosts.module.css";
import Posts from "./Post/Posts";

const MyPosts = (props) => {
  const refTextarea = useRef(null);
  return (
    <div className={classes.postBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
            ref={refTextarea}
            onChange={() => props.textareaTextChange(refTextarea.current.value)}
            value={props.profilePage.postText}
          />
        </div>
        <div>
          <button onClick={props.addPost}>Add Post</button>
        </div>
      </div>
      <div className={classes.post}>
        {props.profilePage.postsData.map((post) => (
          <Posts
            key={post.id}
            message={post.message}
            likesCount={post.likesCount}
          />
        ))}
      </div>
    </div>
  );
};
export default MyPosts;
