import React, { useState } from "react";
import PropTypes from 'prop-types';
import Button from './../button/Button';

import cx from 'classnames';

import styles from './toDoForm.module.css';

const ToDoForm = ({addToDo , showAdd}) => {

  const classAdd = cx(styles.add);
  const classInput = cx(styles.inputAdd);
  const classForm = cx(styles.addForm);

    const [ value, setValue ] = useState('');

    const handleFormSubmit = e => {
      e.preventDefault();

      if(!value) {
        alert('Tuliskan Kegiatan Anda');
        return;
      }else if(value.length > 25){
        return alert('to-do karakter maksimal 25');
      }
        
      addToDo(value);
      setValue("");
      
    };

    if(showAdd){
      return (
        <div className={classAdd}>
                  <form action="" className={classForm} onSubmit={handleFormSubmit}>
                    <input
                      className={classInput} 
                      type="text" 
                      value={value} 
                      onChange={e => setValue(e.target.value)}
                    />
                    <Button type="submit" text="Add" />
                  </form>
                </div>
    )
  }else{
    return null;
  }

  }
  
  ToDoForm.propTypes = {
    addToDo: PropTypes.func.isRequired
  };
export default ToDoForm;