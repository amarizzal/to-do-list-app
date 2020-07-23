import React from 'react';
import Header from "../components/Header";
import Paper from '../components/Paper';
import ToDoForm from '../components/to-do-form';
import ToDos from "../components/to-do";

const ToDoListPage = () => {
  return (
            <Paper>

                <Header />
                
                <ToDoForm />
                
                <ToDos />

            </Paper>
    );
}

export default ToDoListPage;
