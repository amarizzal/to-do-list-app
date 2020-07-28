import React from "react";
import PropTypes from 'prop-types';

import ToDoItem from "../to-do-item/to-do-item";

// import styles from './toDo.module.css';

import * as styles from './to-do.styles';

const ToDos = ({todos, setToDoComplete}) => {
  
    if (todos.length > 0) {
      return (
        <div css={styles.toDoes}>
          {todos.map( (todo, index) => {
            return <ToDoItem key={index} text={todo.text} index={index} setToDoComplete={setToDoComplete} isCompleted={todo.isCompleted}/>
          })}
        </div>
      )
    } else {
      return (
        <div css={styles.placeholderTodo}>
          Tambahkan kegiatan dengan menekan tombol {" "}
          <span css={styles.placeholderButton}>
            ADD
          </span>
          {" "}
          pada pojok kiri atas
        </div>
      )
    }
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