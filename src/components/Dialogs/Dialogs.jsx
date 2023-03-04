import { Message } from "./Message/Message";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";

function Dialogs(props) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.messagePage.dialogsData.map((dialog) => (
          <DialogItem
            key={dialog.id}
            src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"
            id={dialog.id}
            name={dialog.name}
          />
        ))}
      </div>
      <div className={s.messages}>
        {props.messagePage.messagesData.map((message) => (
          <Message key={message.id} message={message.message} />
        ))}
        <textarea
          value={props.messagePage.newMessageText}
          onChange={(e) => props.updateTextMess(e.target.value)}
        />
        <button onClick={props.newMessages}>addMessage</button>
      </div>
    </div>
  );
}
export default Dialogs;
