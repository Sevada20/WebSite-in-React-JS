import s from "../Dialogs.module.css";

export const Message = ({ message }) => {
  return <div className={s.message}>{message}</div>;
};
