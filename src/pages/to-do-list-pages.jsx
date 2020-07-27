import React, { useState } from 'react';
import Header from "../components/header/Header";
import Paper from '../components/paper/Paper';
import ToDoForm from '../components/to-do-form/to-do-form';
import ToDos from "../components/to-do/to-do";

const ToDoListPage = () => {
    const [todos, setTodos] = useState([
    ])

    const addToDo = value => {

        if(todos.length > 10) {
            return alert('to-do-list sudah penuh :)')
        }

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

    const clearToDo = () => setTodos([]);

  return (
            <Paper>

                <Header showFormToggle={showFormToggle} showAdd={showAdd} clearToDo={clearToDo}/>
                
                <ToDoForm addToDo={addToDo} showAdd={showAdd}/>
                
                <ToDos todos={todos} setToDoComplete={setToDoComplete}/>

            </Paper>
    );
}

export default ToDoListPage;
