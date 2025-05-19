import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Exercise1 from './Exercise1';

import Exercise2 from './Exercise2';
import Exercise3 from './Exercise3';
import Exercise4 from './Exercise4';
import Exercise5 from './Exercise5';
import Exercise6 from './Exercise6';
import Exercise7 from './Exercise7';
import Exercise8 from './Exercise8';
import Exercise9 from './Exercise9';
import Exercise10 from './Exercise10';

function App() {
  const employee = {name: "John Doe", age: 30, department: "IT"}
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.targer.value);
  }

  return(
    <div className='App'>
      <h1>Quản lý nhân viên</h1>
      <Exercise1 employee={employee} />
      <Exercise2 employees={employees} />
      <Exercise3 employees={employees} />
      <Exercise4 employees={employees} />
      <Exercise5 employees={employees} />
      <Exercise6 employees={employees} />
      <Exercise7 employees={employees} />
      <Exercise8 employees={employees} />
      <Exercise9 employees={employees} />
      <Exercise10
        employees={employees}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />
    </div>
  )
}

export default App;
