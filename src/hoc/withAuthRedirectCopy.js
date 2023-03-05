import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const withAuthRedirectCopy = (Component) => {
  return (props) => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const navigate = useNavigate();
    useEffect(() => {
      if (!isAuth) {
        navigate("/login");
      }
    }, [navigate, props.isAuth]);
    return <Component {...props} />;
  };
};
