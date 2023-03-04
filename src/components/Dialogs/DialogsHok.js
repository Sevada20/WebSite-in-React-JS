import { useDispatch, useSelector } from "react-redux";
import {
  newMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/messagePageReducer";
import Dialogs from "./Dialogs";

const DialogsHok = () => {
  const dispatch = useDispatch();
  const messagePage = useSelector((state) => state.messagePage);

  const newMessages = () => {
    dispatch(newMessageActionCreator());
  };
  const updateTextMess = (text) => {
    dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      newMessages={newMessages}
      updateTextMess={updateTextMess}
      messagePage={messagePage}
    />
  );
};
export default DialogsHok;
