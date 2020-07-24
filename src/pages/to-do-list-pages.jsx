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

    const addToDo = value => {
        const addedToDo = [...todos, { text:value } ];

        setTodos(addedToDo);
    }

    const [showAdd, setShowAdd] = useState(false);

    const showFormToggle = () => {
        setShowAdd(!showAdd)
        
        console.log("showAdd" , showAdd);
    };


  return (
            <Paper>

                <Header showFormToggle={showFormToggle} />
                
                <ToDoForm addToDo={addToDo} />
                
                <ToDos todos={todos} />

            </Paper>
    );
}

export default ToDoListPage;
