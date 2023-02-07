import { useState, useContext } from "react";
import { ApplicationCtx } from "../../store/state";
import AddBoxIcon from "@mui/icons-material/AddBox";
import styles from "./index.module.scss";

const Navbar = () => {
  const [input, setInput] = useState("");
  const { dispatch } = useContext(ApplicationCtx);

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO_TO_LIST",
      payload: {
        id: Math.floor(Math.random() * 100000),
        content: input,
        status: false,
      },
    });
    setInput(() => "");
  };

  return (
    <div className={styles.Navbar}>
      <form onSubmit={onFormSubmit}>
        <div className={styles.inputBar}>
          {/* <AddBoxIcon /> */}
          <input
            type="text"
            value={input}
            onInput={(e) => setInput(() => e.target.value)}
            placeholder="Add a task"
          />
        </div>
      </form>
    </div>
  );
};

export default Navbar;
