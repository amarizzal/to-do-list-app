import React from "react";

import Button from './button/Button';

const Header = ({showFormToggle , showAdd , clearToDo}) => {
    return (
        <div className="header">
            <Button text={showAdd ?  'Finish' : 'Add' } onClick={showFormToggle}/>
            <h1 className="Title">To Do List</h1>
            <Button text='Clear' onClick={clearToDo} color='red' />
        </div>
    )
}

export default Header;