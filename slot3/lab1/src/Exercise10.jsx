import React from 'react';

const Exercise10 = ({ employees, searchTerm, handleSearch }) => {
  // Lọc nhân viên theo tên
  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <h2>Bài 10: Tìm Kiếm Nhân Viên</h2>
      <input
        type="text"
        placeholder="Tìm theo tên"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((emp, index) => (
            <li key={emp.id || index}>
              {emp.name} - {emp.department}
            </li>
          ))
        ) : (
          <li>Không tìm thấy nhân viên phù hợp</li>
        )}
      </ul>
    </section>
  );
};

export default Exercise10;