import { useReducer } from "react";
import { ApplicationCtx, initialState } from "./store/state";
import mainReducer from "./store/reducer";
import Navbar from "./components/navbar/Navbar";
import TodoList from "./components/todoList";
import SplitscreenOutlinedIcon from "@mui/icons-material/SplitscreenOutlined";
import styles from "./App.module.scss";
import { SubtitlesOffOutlined } from "@mui/icons-material";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <ApplicationCtx.Provider value={{ state, dispatch }}>
      <div className={styles.App}>
        <div className={styles.title}>
          <h1>Todo List</h1>
          <SplitscreenOutlinedIcon />
        </div>
        <Navbar />
        <div className={styles.rules}>
          <p> ✅ Tap: task done </p>
          <p> ❌ Double Tap: delete task </p>
        </div>
        <TodoList />
      </div>
    </ApplicationCtx.Provider>
  );
}

export default App;
