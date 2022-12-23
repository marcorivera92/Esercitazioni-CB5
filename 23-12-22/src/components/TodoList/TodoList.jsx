import "./todolist.css";
import { Button } from "../../atoms/button/Button";
import { useState } from "react";
import { TodoItem } from "../TodoItem/TodoItem";

const items = [
  { label: "Buy Xmas gifts", id: 1 },
  { label: "Buy Xmas gifts", id: 2 },
  { label: "Buy Xmas gifts", id: 3 },
  { label: "Buy Xmas gifts", id: 4 },
  { label: "Buy Xmas gifts", id: 5 },
  { label: "Buy Xmas gifts", id: 6 },
];

export const TodoList = () => {
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

    // console.log(newCheckedList);
  };
  // console.log(checked);

  return (
    <div className="list-container">
      <ul className="todo-list">
        {items.map(function (item) {
          return (
            <li key={item.id}>
              <TodoItem label={item.label} />

              <div className="buttons">
                <Button onClick={() => checkItems(item.id)}>
                  {checked.includes(item.id) ? "✅" : "☑️"}
                </Button>
                <Button onClick={() => deleteItems(item.id)}> ☓ </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
