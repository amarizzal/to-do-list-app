import React from "react";
import cx from 'classnames';

import Button from '../button/Button';

import styles from './header.module.css';

const Header = ({showFormToggle , showAdd , clearToDo}) => {
    
    const className = cx(styles.header);

    return (
        <div className={className}>
            <Button text={showAdd ?  'Finish' : 'Add' } onClick={showFormToggle}/>
            <h1 className="Title">To Do List</h1>
            <Button text='Clear' onClick={clearToDo} color='red' />
        </div>
    )
}

export default Header;