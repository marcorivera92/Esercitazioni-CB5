import { useContext } from "react";
import { ApplicationContext } from "../../store";
import NoteItem from "../note-item/NoteItem";
import styles from "./index.module.scss";

const NoteList = () => {
  const { state } = useContext(ApplicationContext);

  return (
    <div className={styles.NoteList}>
      {state.noteList?.map((note) => (
        <NoteItem data={note} key={note.id} />
      ))}
    </div>
  );
};

export default NoteList;
