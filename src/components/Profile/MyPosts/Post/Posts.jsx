import classes from "./Post.module.css";

const Posts = ({ message, likesCount }) => {
  return (
    <div className={classes.item}>
      <img
        className={classes.img}
        src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"
      />
      {message}
      <div>
        <span>{likesCount}</span>
      </div>
    </div>
  );
};
export default Posts;
