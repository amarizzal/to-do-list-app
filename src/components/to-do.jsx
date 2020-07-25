import React from "react";
import PropTypes from 'prop-types';

import ToDoItem from "./to-do-item";

const ToDos = ({todos, setToDoComplete}) => {
  
    

    return (
        <div className="to-does">
          {todos.map( (todo, index) => {
            return <ToDoItem key={index} text={todo.text} index={index} setToDoComplete={setToDoComplete} isCompleted={todo.isCompleted}/>
          })}
        </div>
    )
}

ToDos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  setToDoComplete: PropTypes.func.isRequired
};

export default ToDos;