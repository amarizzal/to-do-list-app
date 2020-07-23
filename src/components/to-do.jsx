import React from "react";
import PropTypes from 'prop-types';

import ToDoItem from "./to-do-item";

const ToDos = ({todos}) => {
  

    return (
        <div className="to-does">
          {todos.map( (todo, index) => {
            return <ToDoItem key={index} text={todo.text} />
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