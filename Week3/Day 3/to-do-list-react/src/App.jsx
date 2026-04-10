import React, { useState } from 'react';
import './App.css';

const App = () => {
  let [todolist, setTodolist] = useState([]);

  let saveToDoList = (event) => {
    event.preventDefault(); 
    
    
    let toname = event.target.toname.value;

    
    if (toname.trim() === "") return; 

    if (!todolist.includes(toname)) {
      let finalToDolist = [...todolist, toname];
      setTodolist(finalToDolist);
      event.target.reset(); // Clear the text box after saving
    } else {
      alert("!!This work has already been added!!");
    }
  };

  
  let list = todolist.map((value, index) => {
    return (
      <ToDoListItems 
        value={value} 
        key={index} 
        indexNumber={index} 
        todolist={todolist} 
        setTodolist={setTodolist} 
      />
    );
  });

  return (
    <div className='App'>
      <h1>To do list</h1>
      <form onSubmit={saveToDoList}>
        <input type='text' name='toname' />
        <button type="submit">Save</button>
      </form>

      <div className='outerDiv'>
        <ul>
          {/* Render the mapped list variable here */}
          {list} 
        </ul>
      </div>
    </div>
  );
};

export default App;


function ToDoListItems({ value, indexNumber, todolist, setTodolist }) {
  let [status, setStatus] = useState(false);

  let deleteRow = (event) => {
    event.stopPropagation(); 
    let finalData = todolist.filter((v, i) => i !== indexNumber);
    setTodolist(finalData);
  };

  let checkStatus = () => {
    setStatus(!status);
  };

  return (
    <li className={status ? 'completetodo' : ''} onClick={checkStatus}>
      {indexNumber + 1}. {value} 
      <span onClick={deleteRow} style={{cursor: 'pointer', marginLeft: '10px', color: 'red'}}>
        &times;
      </span>
    </li>
  );
}