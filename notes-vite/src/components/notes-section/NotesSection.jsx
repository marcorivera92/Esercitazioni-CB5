import NoteList from "../note-list/NoteList";
import styles from "./index.module.scss";

const NotesSection = () => {
  return (
    <div className={styles.NotesSection}>
      <NoteList />
    </div>
  );
};

export default NotesSection;
