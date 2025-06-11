import React, { useState } from 'react';

function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
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
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      
      {isVisible && (
        <p style={{ marginTop: '15px' }}>
          Toggle ME!
        </p>
      )}
    </div>
  );
}

export default ToggleText;
