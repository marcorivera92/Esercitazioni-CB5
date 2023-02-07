import { useContext } from "react";
import { ApplicationCtx } from "../../store/state";
import styles from "./index.module.scss";

const TodoItem = ({ data }) => {
  const { state, dispatch } = useContext(ApplicationCtx);

  const onHandleClick = (e) => {
    if (e.detail === 2) {
      dispatch({
        type: "REMOVE_TODO_FROM_LIST",
        payload: data.id,
      });
    } else {
      dispatch({
        type: "COMPLETED_TODO_TO_LIST",
        payload: data.id,
      });
    }
  };

  return (
    <div
      className={`${styles.TodoItem} ${data.status && styles.statusDone}`}
      onClick={onHandleClick}
    >
      <p>{data.content}</p>
    </div>
  );
};

export default TodoItem;
