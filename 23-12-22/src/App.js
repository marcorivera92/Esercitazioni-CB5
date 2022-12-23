import "./App.css";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <h1 className="header-title"> To-Do List</h1>
      <TodoList />
    </div>
  );
}

export default App;
