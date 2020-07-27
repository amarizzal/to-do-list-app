import React from "react";

import Button from '../button/Button';

import styles from './header.module.css';

const Header = ({showFormToggle , showAdd , clearToDo}) => {
    
    return (
        <div className={styles.header}>
            <Button text={showAdd ?  'Finish' : 'Add' } onClick={showFormToggle}/>
            <h1 className={styles.Title}>To Do List</h1>
            <Button text='Clear' onClick={clearToDo} color='red' />
        </div>
    )
}

export default Header;