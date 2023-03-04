import { NavLink } from "react-router-dom";
import s from "../Dialogs.module.css";

const DialogItem = ({ name, id, src }) => {
  return (
    <div className={s.items}>
      <img src={src} className={s.img} />
      <NavLink
        to={"/dialogs/" + id}
        className={({ isActive }) => (isActive ? s.activeLink : "")}
      >
        {name}
      </NavLink>
    </div>
  );
};
export default DialogItem;
