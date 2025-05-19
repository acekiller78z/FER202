import React from 'react';

const Exercise5 = ({ employees }) => {
  return (
    <section>
      <h2>Bài 5: Dropdown Nhân Viên</h2>
      <select>
        <option value="">Chọn nhân viên</option>
        {employees.map((emp, index) => (
          <option key={emp.id || index} value={emp.name}>
            {emp.name}
          </option>
        ))}
      </select>
    </section>
  );
};

export default Exercise5;