import React, { useState } from 'react';

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');

  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Grapes',
    'Strawberry',
    'Blueberry',
    'Mango'
  ];

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{
      backgroundColor: '#1e1e1e',
      minHeight: '100vh',
      padding: '40px',
      color: '#fff',
      fontFamily: 'Arial'
    }}>
      <h2>Search Filter</h2>
      <input
        type="text"
        placeholder="Search fruits..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '10px',
          width: '250px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          marginBottom: '20px'
        }}
      />

      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li
              key={index}
              style={{
                backgroundColor: '#2e2e2e',
                padding: '10px',
                marginBottom: '8px',
                borderRadius: '4px'
              }}
            >
              {item}
            </li>
          ))
        ) : (
          <li style={{ color: '#aaa' }}>No results found</li>
        )}
      </ul>
    </div>
  );
}

export default SearchFilter;
