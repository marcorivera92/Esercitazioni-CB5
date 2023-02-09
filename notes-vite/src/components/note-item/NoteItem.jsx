import { useContext } from "react";
import { ApplicationContext } from "../../store";
import { ACTIONS } from "../../store/actions";
import styles from "./index.module.scss";

const NoteItem = ({ data }) => {
  const { dispatch } = useContext(ApplicationContext);

  const onHandleRemove = () => {
    dispatch({
      type: ACTIONS.REMOVE_NOTE,
      payload: data.id,
    });
  };

  return (
    <div className={styles.NoteItem}>
      <div className={styles.noteHead}>
        <h3> {data.title} </h3>
        <button onClick={() => onHandleRemove()}> X </button>
      </div>
      <p> {data.content} </p>
    </div>
  );
};

export default NoteItem;
