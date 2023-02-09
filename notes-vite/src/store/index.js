import { createContext } from "react";

const initialState = {
  noteList: [],
};

const ApplicationContext = createContext(initialState);

export { initialState, ApplicationContext };
