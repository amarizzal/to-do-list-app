import React from "react";
import PropTypes from "prop-types";

import style from './paper.module.css';

const Paper = ({children}) => {
    return (
        <div className={style.container}>
            <div className={style.frame}>
            {children}
            </div>
        </div>
    )
}

Paper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Paper;