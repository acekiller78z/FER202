import React from 'react';

const Exercise6 = ({ employees }) => {
  return (
    <section>
      <h2>Bài 6: Nhân Viên Phòng IT</h2>
      <ul>
        {employees
          .filter((emp) => emp.department === "IT")
          .map((emp, index) => (
            <li key={emp.id || index}>
              {emp.name} - {emp.department}
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Exercise6;