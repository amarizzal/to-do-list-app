import React from 'react';

import PropTypes from 'prop-types';

const ToDoItem = props => {
    return (
        <div className="to-do">
            <span className="text-item">{props.text}</span>
        </div>
    )
}

ToDoItem.propTypes = {
    text: PropTypes.string.isRequired
}

export default ToDoItem;