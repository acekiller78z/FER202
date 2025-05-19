import React from 'react';

const Exercise8 = ({ employees }) => {
  // Nhóm nhân viên theo phòng ban
  const groupedEmployees = employees.reduce((acc, emp) => {
    const dept = emp.department;
    if (!acc[dept]) acc[dept] = [];
    acc[dept].push(emp);
    return acc;
  }, {});

  return (
    <section>
      <h2>Bài 8: Nhóm Theo Phòng Ban</h2>
      {Object.keys(groupedEmployees).map((dept) => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {groupedEmployees[dept].map((emp, index) => (
              <li key={emp.id || index}>
                {emp.name} - {emp.department}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Exercise8;