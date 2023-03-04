import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        className={classes.header__img}
        src="https://www.interfax.ru/ftproot/photos/photostory/2022/12/02/week/zax.jpg"
      />
      <div className={classes.login}>
        {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
