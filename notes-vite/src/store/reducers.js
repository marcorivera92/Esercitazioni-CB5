import { ACTIONS } from "./actions";

const mainReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_NOTE: {
      return {
        ...state,
        noteList: [...state.noteList, action.payload],
      };
    }

    case ACTIONS.REMOVE_NOTE: {
      return {
        ...state,
        noteList: state.noteList.filter((note) => note.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export { mainReducer };
