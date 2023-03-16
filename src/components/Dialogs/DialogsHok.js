import { useDispatch, useSelector } from "react-redux";
import { newMessageActionCreator } from "../../redux/messagePageReducer";
import Dialogs from "./Dialogs";

const DialogsHok = () => {
  const dispatch = useDispatch();
  const messagePage = useSelector((state) => state.messagePage);

  const newMessages = (textMessage) => {
    dispatch(newMessageActionCreator(textMessage));
  };

  return <Dialogs newMessages={newMessages} messagePage={messagePage} />;
};
export default DialogsHok;
