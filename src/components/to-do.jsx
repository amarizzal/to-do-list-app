import React from "react";
import PropTypes from 'prop-types';

import ToDoItem from "./to-do-item";

const ToDos = ({todos}) => {
  

    return (
        <div className="to-does">
          {todos.map(todo => {
            return <ToDoItem text={todo.text} />
          })}
        </div>
    )
}

ToDos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  )
};

export default ToDos;