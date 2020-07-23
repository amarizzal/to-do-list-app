import React, { useState } from 'react';
import Header from "../components/Header";
import Paper from '../components/Paper';
import ToDoForm from '../components/to-do-form';
import ToDos from "../components/to-do";

const ToDoListPage = () => {
    const [todos, setTodos] = useState([
        {
            text: "Belajar React"
        },
        {
            text: "Belajar Flutter"
        },
        {
            text: "Belajar Laravel"
        },
    ])

  return (
            <Paper>

                <Header />
                
                <ToDoForm />
                
                <ToDos todos={todos} />

            </Paper>
    );
}

export default ToDoListPage;
