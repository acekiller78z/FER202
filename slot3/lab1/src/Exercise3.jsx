import React from 'react';

const Exercise3 = ({ employees }) => {
  return (
    <section>
      <h2>Bài 3: Bảng Nhân Viên</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Phòng Ban</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp.id || index}>
              <td>{emp.id || index + 1}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Exercise3;