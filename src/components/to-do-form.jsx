import React, { useState } from "react";
import PropTypes from 'prop-types';

const ToDoForm = ({addToDo}) => {
    const [ value, setValue ] = useState('');

    const handleFormSubmit = e => {
      e.preventDefault();

      if(!value) {
        alert('Tuliskan Kegiatan Anda');
        return;
      }
        
      addToDo(value);
      alert(value); 
      setValue("");
      
    };
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
}

ToDoForm.propTypes = {
  addToDo: PropTypes.func.isRequired
};
export default ToDoForm;