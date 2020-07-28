import React from 'react';

import PropTypes from 'prop-types';
// import cx from 'classnames';

// import styles from './button.module.css';

import * as styles from './button.styles';

const Button = ({ onClick, color, text }) => {
    // const className = [
    //     'header-btn',
    //     color === 'red' && 'main-red-color',
    //     color === 'black' && 'main-black-color'
    // ].join(' ');

    // const className = cx(styles.headerBtn, {
    //     [styles.mainRedColor]: color === 'red'
    // });

    return (
        // <button onClick={onClick} className={className}>
        //     {text}
        // </button>
        <button onClick={onClick} css={styles.button({color})}>
            {text}
        </button>
    )
};

Button.defaultProps = {
    text: "Button",
    color: 'black'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["black", "red"])
}

export default Button;