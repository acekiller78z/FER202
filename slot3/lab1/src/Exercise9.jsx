import React from 'react';

const Exercise9 = ({ employees }) => {
  // Kiểm tra có nhân viên tuổi teen
  const isTeenager = employees.some((e) => e.age >= 10 && e.age <= 20);

  return (
    <section>
      <h2>Bài 9: Kiểm Tra Tuổi Teen</h2>
      <p>Có nhân viên tuổi teen? {isTeenager ? "Có" : "Không"}</p>
    </section>
  );
};

export default Exercise9;