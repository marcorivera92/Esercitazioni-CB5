import { useContext, useState } from "react";
import { ApplicationContext } from "../../store";
import { ACTIONS } from "../../store/actions";
import styles from "./index.module.scss";

const AddNote = () => {
  const { dispatch } = useContext(ApplicationContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_NOTE,
      payload: {
        id: Math.floor(Math.random() * 1_000),
        title,
        content,
      },
    });
    setTitle(() => "");
    setContent(() => "");
  };

  return (
    <div className={styles.AddNote}>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(() => e.target.value)}
          placeholder="Add title"
          required
        />
        <input
          type="textarea"
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(() => e.target.value)}
          placeholder="Add content"
          required
        />
        <input type="submit" value="Add note" />
      </form>
    </div>
  );
};

export default AddNote;
