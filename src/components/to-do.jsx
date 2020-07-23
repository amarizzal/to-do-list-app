import React from "react";

import ToDoItem from "./to-do-item";

const ToDos = () => {
  const ex = [
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar React"
    },
  ];

    return (
        <div className="to-does">
          {ex.map(todo => {
            return <ToDoItem text={todo.text} />
          })}
        </div>
    )
}

export default ToDos;