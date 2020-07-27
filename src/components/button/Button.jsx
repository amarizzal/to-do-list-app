import React from 'react';
import cx from 'classnames';

import styles from './button.module.css';

const Button = ({ onClick, color, text }) => {
    // const className = [
    //     'header-btn',
    //     color === 'red' && 'main-red-color',
    //     color === 'black' && 'main-black-color'
    // ].join(' ');

    const className = cx(styles.headerBtn, {
        [styles.mainRedColor]: color === 'red'
    });

    return (
        <button onClick={onClick} className={className}>
            {text}
        </button>
    )
};

Button.defaultProps = {
    text: "Button",
    color: 'black'
}

export default Button;