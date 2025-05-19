import React from 'react';

const Exercise7 = ({ employees }) => {
  // Sắp xếp nhân viên
  const sortedEmployees = [...employees].sort((a, b) => {
    return (
      a.department.localeCompare(b.department) ||
      a.name.localeCompare(b.name)
    );
  });

  return (
    <section>
      <h2>Bài 7: Nhân Viên Sắp Xếp</h2>
      <ul>
        {sortedEmployees.map((emp, index) => (
          <li key={emp.id || index}>
            {emp.name} - {emp.department}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Exercise7;