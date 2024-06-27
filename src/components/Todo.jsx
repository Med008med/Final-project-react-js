import React, { useState } from 'react';

const Todo = ({ todos, setTodos }) => {
  const [text, setText] = useState('');

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h2>To Do List</h2>
      <input
        type="text"
        id="inputt"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your task here ..."
        value={text}
      />
      <button
        onClick={() => {
          if (text.trim()) {  
            setTodos([...todos, text]);
            setText(''); 
          }
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((el, index) => (
          <li key={index}>
            {el}
            <button onClick={() => handleDelete(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

