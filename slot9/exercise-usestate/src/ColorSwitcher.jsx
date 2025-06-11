import React, { useState } from 'react';

function ColorSwitcher() {
  const [color, setColor] = useState('');

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div style={{
      backgroundColor: '#1e1e1e',
      minHeight: '100vh',
      padding: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '50px',
      color: '#fff',
      fontFamily: 'Arial'
    }}>
      {/* Dropdown */}
      <div>
        <select
          value={color}
          onChange={handleChange}
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            minWidth: '160px'
          }}
        >
          <option value="">Select a color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
      </div>

      {/* Color box */}
      <div>
        <select
          value={color}
          onChange={handleChange}
          style={{
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            minWidth: '160px',
            marginBottom: '20px'
          }}
        >
          <option value="">Select a color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
        <div
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: color || 'transparent',
            border: color ? 'none' : '1px dashed white'
          }}
        />
      </div>
    </div>
  );
}

export default ColorSwitcher;
