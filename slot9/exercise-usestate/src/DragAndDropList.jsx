import React, { useState } from 'react';

function DragAndDropList() {
  const [items, setItems] = useState([
    'Item1',
    'Item2',
    'Item3',
    'Item4',
    'Item5'
  ]);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggingItem === index) return;

    const newItems = [...items];
    const draggedItem = newItems[draggingItem];
    newItems.splice(draggingItem, 1);
    newItems.splice(index, 0, draggedItem);
    setDraggingItem(index);
    setItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <div style={{
      backgroundColor: '#1e1e1e',
      minHeight: '100vh',
      padding: '40px',
      color: '#fff',
      fontFamily: 'Arial'
    }}>
      <h2>Drag and Drop List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnd={handleDragEnd}
            style={{
              backgroundColor: draggingItem === index ? '#333' : '#2e2e2e',
              padding: '10px 15px',
              marginBottom: '10px',
              borderRadius: '5px',
              cursor: 'grab',
              userSelect: 'none',
              transition: 'background-color 0.2s'
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragAndDropList;
