import React from 'react';
import cx from 'classnames';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

import styles from './toDoItem.module.css';

const ToDoItem = ({text, setToDoComplete , index, isCompleted}) => {

    return (
        <div css={css`background-color: red;`} className={styles.toDo} onClick={() => setToDoComplete(index)}>
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