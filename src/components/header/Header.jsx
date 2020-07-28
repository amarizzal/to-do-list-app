import React from "react";

import Button from '../button/Button';

// import styles from './header.module.css';

import * as styles from './header.styles';

const Header = ({showFormToggle , showAdd , clearToDo}) => {
    
    return (
        <div css={styles.header}>
            <Button text={showAdd ?  'Finish' : 'Add' } onClick={showFormToggle}/>
            <h1 css={styles.title}>To Do List</h1>
            <Button text='Clear' onClick={clearToDo} color='red' />
        </div>
    )
}

export default Header;