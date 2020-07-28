import React from 'react';
import PropTypes from 'prop-types';

// import styles from './toDoItem.module.css';
import * as styles from './to-do-item.styles';

const ToDoItem = ({text, setToDoComplete , index, isCompleted}) => {

    return (
        <div css={styles.toDo} onClick={() => setToDoComplete(index)}>
            <span style={{textDecoration: isCompleted ? 'line-through' : 'initial'}}>
                {text}
                </span>
        </div>
    )
}

ToDoItem.propTypes = {
    text: PropTypes.string.isRequired,
    setToDoComplete: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}

export default ToDoItem;