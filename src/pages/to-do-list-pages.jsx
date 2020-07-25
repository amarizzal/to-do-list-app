import React, { useState } from 'react';
import Header from "../components/Header";
import Paper from '../components/Paper';
import ToDoForm from '../components/to-do-form';
import ToDos from "../components/to-do";

const ToDoListPage = () => {
    const [todos, setTodos] = useState([
        {
            text: "Belajar React",
            isCompleted: false
        },
        {
            text: "Belajar Flutter",
            isCompleted: false

        },
        {
            text: "Belajar Laravel",
            isCompleted: false
        },
    ])

    const addToDo = value => {
        const addedToDo = [...todos, { text:value, isCompleted:false} ];

        setTodos(addedToDo);
    }

    const [showAdd, setShowAdd] = useState(false);

    const showFormToggle = () => {
        setShowAdd(!showAdd);
    };

    const setToDoComplete = index => {
        const addedToDo = [...todos];

        addedToDo[index].isCompleted = !addedToDo[index].isCompleted;

        setTodos(addedToDo);

    };

  return (
            <Paper>

                <Header showFormToggle={showFormToggle} showAdd={showAdd}/>
                
                <ToDoForm addToDo={addToDo} showAdd={showAdd}/>
                
                <ToDos todos={todos} setToDoComplete={setToDoComplete}/>

            </Paper>
    );
}

export default ToDoListPage;
