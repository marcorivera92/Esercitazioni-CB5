import TodoItem from "../todoItem";
import { ApplicationCtx } from "../../store/state";
import { useContext } from "react";
import styles from "./index.module.scss";

const TodoList = () => {
  const context = useContext(ApplicationCtx);

  return (
    <div className={styles.TodoList}>
      {context.state.todoList.map((todo) => (
        <TodoItem data={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
