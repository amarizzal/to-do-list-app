import React, { useState } from "react";
import PropTypes from 'prop-types';
import Button from './../button/Button';

// import styles from './toDoForm.module.css';
import * as styles from './to-do-form.styles';

const ToDoForm = ({addToDo , showAdd}) => {

  
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
        <div css={styles.add}>
                  <form action="" css={styles.addForm} onSubmit={handleFormSubmit}>
                    <input
                      css={styles.inputAdd} 
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