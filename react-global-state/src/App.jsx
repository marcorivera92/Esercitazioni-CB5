import "./App.css";
import Counter from "./components/counter/Counter";
import TodoList from "./components/todo-list/TodoList";

function App() {
  return (
    <div className="App">
      <h1>First Vite React App ⚡️</h1>

      <div className="counter">
        <Counter />
      </div>

      <div className="todo-list">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
