import React from 'react';

const Exercise2 = ({ employees }) => {
  return (
    <section>
      <h2>Bài 2: Danh Sách Nhân Viên</h2>
      <ul>
        {employees.map((emp, index) => (
          <li key={emp.id || index}>
            {emp.name} - {emp.department}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Exercise2;