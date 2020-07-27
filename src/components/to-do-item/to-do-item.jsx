import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './toDoItem.module.css';

const ToDoItem = ({text, setToDoComplete , index, isCompleted}) => {

    const className = cx(styles.toDo);

    return (
        <div className={className} onClick={() => setToDoComplete(index)}>
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