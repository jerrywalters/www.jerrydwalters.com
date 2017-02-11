import { SEND__MESSAGE, 
         ADD__NEW__MESSAGE,
         ADD__UNCLE__STATUS,
         TOGGLE_CHAT
        } from '../actions'

const OPEN__PROJECT = 'OPEN__PROJECT';

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_CHAT:
    return Object.assign({}, state, {
      chat: {
        isChatOpen: !state.chat.isChatOpen,
      }
    });
    case ADD__NEW__MESSAGE:
      return Object.assign({}, state, {
        messages: [...state.messages, action.message]
      });
    case OPEN__PROJECT:
      return Object.assign({}, state, {
        currentProject: action.project
      })
    case ADD__UNCLE__STATUS:
      return Object.assign({}, state, {
        isTyping: action.isTyping,
        isUncleOnline: action.isUncleOnline
      });
   default:
    return state;
  }
}

export default rootReducer;
