import { useReducer } from "react";
import styles from "./index.module.scss";

/* REDUCER */
const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      state.count;
  }
}

/* COUNTER */
function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  return (
    <div className={styles.Counter}>
      <h3>Counter</h3>
      <span> {state.count} </span>
      <div className={styles.buttons}>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default Counter;
