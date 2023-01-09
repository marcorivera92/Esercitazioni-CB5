import "./todolist.css";
import { Button } from "../../atoms/button/Button";
import { useState } from "react";
import { TodoItem } from "../TodoItem/TodoItem";
import { InputGroup } from "../../atoms/input-group/InputGroup";

export const TodoList = () => {
  const [items, setItems] = useState([]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const formEl = event.target;
    const formData = new FormData(formEl);
    const label = formData.get("taskName");

    setItems((oldItems) => {
      const newItem = { label, isDone: false, id: Math.random() * 1_000 }; // "id" -> generate random ID
      return [...oldItems, newItem];
    });
  };

  // Events
  const [checked, setCheck] = useState([]);

  const checkItems = (id) => {
    if (!checked.includes(id)) {
      setCheck((prevState) => [...prevState, id]);
    }
  };

  const deleteItems = (id) => {
    const newCheckedList = checked.filter((el) => el !== id);
    setCheck(newCheckedList);
  };

  return (
    <div className="list-container">
      <form className="form-input" onSubmit={formSubmitHandler}>
        <InputGroup label={"Add Task:"} name="taskName" />
      </form>

      <ul className="todo-list">
        {items.map((item, id) => (
          <li key={id}>
            <TodoItem label={item.label} index={id} />

            <div className="buttons">
              <Button onClick={() => checkItems(item.id)}>
                {checked.includes(item.id) ? "✅" : "☑️"}
              </Button>
              <Button onClick={() => deleteItems(item.id)}> ❌ </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
