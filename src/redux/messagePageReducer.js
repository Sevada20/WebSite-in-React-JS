const newMessage = "newMessage";

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
};

const messagePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case newMessage:
      const messageObj = {
        id: Math.random(),
        message: action.newMessageText,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, messageObj],
      };

    default:
      return state;
  }
};

export const newMessageActionCreator = (newMessageText) => {
  return {
    type: newMessage,
    newMessageText,
  };
};

export default messagePageReducer;
