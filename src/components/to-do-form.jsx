import React, { useState } from "react";
import PropTypes from 'prop-types';

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
        <div className="add">
                  <form action="" className="add-form" onSubmit={handleFormSubmit}>
                    <input 
                      type="text" 
                      value={value} 
                      onChange={e => setValue(e.target.value)}
                      />
                    <button type="submit" className="header-btn">ADD</button>
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