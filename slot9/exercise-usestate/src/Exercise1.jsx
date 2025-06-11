import React, { useState } from 'react';

function Counter_1() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  return (
    <div style={{
      backgroundColor: '#1e1e1e',
      color: 'white',
      padding: '20px',
      borderRadius: '8px',
      width: '200px',
      textAlign: 'center',
      margin: '50px auto',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
    }}>
      <button onClick={handleIncrement}>Increment</button>
      <h2>Count: {count}</h2>
    </div>
  );
}
export default Counter_1;
