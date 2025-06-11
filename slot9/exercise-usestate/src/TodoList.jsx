import React, { useState } from 'react';

function StyledTodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() === '') return;
    setTodos([...todos, input]);
    setInput('');
  };

  const handleDelete = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div style={{
      backgroundColor: '#1e1e1e',
      minHeight: '100vh',
      padding: '50px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      color: '#fff',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Input section */}
      <div style={{ flex: 1, marginRight: '50px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Please input a Task"
          style={{
            padding: '10px',
            width: '60%',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginRight: '10px'
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            backgroundColor: '#e63946',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Add Todo
        </button>
      </div>

      {/* Todo list section */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '10px',
        width: '300px'
      }}>
        <h3 style={{ color: '#333', marginBottom: '15px' }}>Todo List</h3>
        {todos.map((todo, index) => (
          <div key={index} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '10px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <span style={{ color: '#333' }}>{todo}</span>
            <button
              onClick={() => handleDelete(index)}
              style={{
                backgroundColor: '#e63946',
                color: 'white',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StyledTodoList;
