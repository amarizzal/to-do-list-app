import React from "react";
import PropTypes from "prop-types";

// import style from './paper.module.css';

import * as styles from './paper.styles';

const Paper = ({children}) => {
    return (
        <div css={styles.container}>
            <div css={styles.frame}>
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