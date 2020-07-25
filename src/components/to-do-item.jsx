import React from 'react';

import PropTypes from 'prop-types';

const ToDoItem = ({text, setToDoComplete , index, isCompleted}) => {
    return (
        <div className="to-do" onClick={() => setToDoComplete(index)}>
            <span className="text-item" style={{textDecoration: isCompleted ? 'line-through' : 'initial'}}>
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