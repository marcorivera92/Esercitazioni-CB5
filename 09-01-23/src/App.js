import "./App.css";

import { TodoList } from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <h1 className="header-title"> Task Manager</h1>

      <TodoList />
    </div>
  );
}

export default App;
