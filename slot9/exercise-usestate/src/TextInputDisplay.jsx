import React, { useState } from 'react';

function TextInputDisplay() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{
      backgroundColor: '#1e1e1e',
      color: 'white',
      padding: '20px',
      borderRadius: '8px',
      width: '300px',
      textAlign: 'center',
      margin: '50px auto',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
    }}>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Type something..." 
        style={{
          padding: '8px',
          width: '90%',
          borderRadius: '4px',
          border: '1px solid #ccc',
          marginBottom: '15px'
        }}
      />
      <h3>Input Text: {text}</h3>
    </div>
  );
}

export default TextInputDisplay;
