import { createContext } from "react";

const initialState = {
  todoList: [
    {
      id: "1",
      content: "Compra il pane",
      status: false,
    },
    {
      id: "2",
      content: "Paga le bollette",
      status: false,
    },
  ],
};

const ApplicationCtx = createContext(initialState);

export { ApplicationCtx, initialState };
