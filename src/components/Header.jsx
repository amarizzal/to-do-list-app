import React from "react";

const Header = ({showFormToggle}) => {
    return (
        <div className="header">
                  <button className="header-btn" onClick={showFormToggle}>Add</button>
                  <h1 className="Title">To Do List</h1>
                  <button className="header-btn main-red-color" >Clear</button>
                </div>
    )
}

export default Header;