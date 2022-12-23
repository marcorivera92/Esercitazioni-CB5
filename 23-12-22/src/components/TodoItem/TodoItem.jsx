import { useState } from "react";
import "./todoitem.css";

export function TodoItem({ label }) {
  const [completed, setTodo] = useState(false);

  return <div className="todo-item">{label}</div>;
}
