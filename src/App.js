import React from 'react';
import './App.css';
import './style.css'
import Peper from "./components/Paper"
import Paper from './components/Paper';

function App() {
  return (
            <Paper>

              <div className="frame">
                <div className="header">
                  <button className="header-btn">Add</button>
                  <h1 className="Title">To Do List</h1>
                  <button className="header-btn main-red-color">Clear</button>
                </div>
                <div className="add">
                  <form action="" className="add-form">
                    <input type="text"></input>
                    <button type="submit" className="header-btn">ADD</button>
                  </form>
                </div>
                <div className="to-does">
                  <div className="to-do">
                    <span className="to-do-text">Learning React</span>
                  </div>
                  <div className="to-do">
                    <span className="to-do-text">Learning React</span>
                  </div>
                  <div className="to-do">
                    <span className="to-do-text">Learning React</span>
                  </div>
                </div>
              </div>
              </Paper>
    );
}

export default App;
