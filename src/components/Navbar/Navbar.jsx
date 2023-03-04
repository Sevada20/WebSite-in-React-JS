import { NavLink } from "react-router-dom";
import SiteBar from "../SiteBar/SiteBar";
import s from "./Navbar.module.css";
const Navbar = (props) => {
  return (
    <div className={s.container}>
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? `${s.activeLink}` : "")}
          >
            Profile
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/dialogs"
            className={({ isActive }) => (isActive ? `${s.activeLink}` : "")}
          >
            Messages
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/news"
            className={({ isActive }) => (isActive ? `${s.activeLink}` : "")}
          >
            News
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/music"
            className={({ isActive }) => (isActive ? `${s.activeLink}` : "")}
          >
            Music
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? `${s.activeLink}` : "")}
          >
            Settings
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? `${s.activeLink}` : "")}
          >
            Users
          </NavLink>
        </div>
      </nav>
      <SiteBar sitebar={props.sitebar} />
    </div>
  );
};

export default Navbar;
