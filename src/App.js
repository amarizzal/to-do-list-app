import React from 'react';
import './App.css';
import './style.css'
import Header from "./components/Header"
import Paper from './components/Paper';
import ToDoForm from './components/to-do-form';
import ToDos from "./components/to-do";

function App() {
  return (
            <Paper>

                <Header />
                
                <ToDoForm />
                
                <ToDos />

            </Paper>
    );
}

export default App;
