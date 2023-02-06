import { useReducer, useState } from "react";
import styles from "./index.module.scss";

const ACTIONS = {
  ADD_TODOS: "add-todo",
  TOGGLE_TODOS: "toggle-todo",
  DELETE_TODOS: "delete-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODOS:
      return [...todos, newTodo(action.payload.name)];
    //   "PAYLOAD" -> pass data to dispatch

    case ACTIONS.TOGGLE_TODOS:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    case ACTIONS.DELETE_TODOS:
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
}

function newTodo(name) {
  return {
    id: Date.now(),
    name: name,
    complete: false,
  };
}

function TodoList() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODOS, payload: { name: name } });
    setName("");
  };

  return (
    <div className={styles.TodoList}>
      <h3>Todo List</h3>

      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>

      <div className={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div
              className={`${styles.todo} ${todo.complete ? styles.done : ""}`}
            >
              {todo.name}
            </div>
            <div className={styles.buttons}>
              <button
                onClick={() =>
                  dispatch({
                    type: ACTIONS.TOGGLE_TODOS,
                    payload: { id: todo.id },
                  })
                }
              >
                Done
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: ACTIONS.DELETE_TODOS,
                    payload: { id: todo.id },
                  })
                }
              >
                {" "}
                Delete{" "}
              </button>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
