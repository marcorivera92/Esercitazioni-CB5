import { ApplicationContext, initialState } from "./store";
import { useReducer } from "react";
import { mainReducer } from "./store/reducers";
import Navbar from "../src/components/navbar/Navbar";
import AddNote from "../src/components/add-note/AddNote";
import NotesSection from "../src/components/notes-section/NotesSection";

import styles from "./App.module.scss";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <div className={styles.App}>
      <ApplicationContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <main>
          <AddNote />
          <NotesSection />
        </main>
      </ApplicationContext.Provider>
    </div>
  );
}

export default App;
