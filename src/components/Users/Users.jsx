import s from "./Users.module.css";
import photoUser from "../../images/image/photoUser.webp";
import { NavLink } from "react-router-dom";
function Users(props) {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <div className={s.mainDivUsers}>
      {pages.map((p) => (
        <span
          key={Math.random()}
          className={props.currentPage === p ? s.selectedPage : ""}
          onClick={() => props.onPageChanged(p)}
        >
          {p}
        </span>
      ))}
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={`/profile/${user.id}`}>
                <img
                  src={
                    user.photos.small !== null ? user.photos.small : photoUser
                  }
                  className={s.img}
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  disabled={props.followingProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.unFollow(user.id);
                  }}
                >
                  Followed
                </button>
              ) : (
                <button
                  disabled={props.followingProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  unFollowed
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>user.location.city</div>
              <div>user.location.country</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}
export default Users;
