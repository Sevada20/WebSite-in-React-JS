const newMessage = "newMessage";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
  dialogsData: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Viktore" },
  ],
  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you" },
    { id: 3, message: "Yo" },
  ],
  newMessageText: "react/redux",
};

const messagePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case newMessage:
      const messageObj = {
        id: Math.random(),
        message: state.newMessageText,
      };
      return {
        ...state,
        newMessageText: "",
        messagesData: [...state.messagesData, messageObj],
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.messageText,
      };
    default:
      return state;
  }
};

export const newMessageActionCreator = () => {
  return {
    type: newMessage,
  };
};

export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    messageText: text,
  };
};

export default messagePageReducer;
