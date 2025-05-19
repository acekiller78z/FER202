import React from 'react';

const Exercise4 = ({ employees }) => {
  // Hàm tính tuổi trung bình với rest parameters
  const averageAge = (...ages) => {
    const sum = ages.reduce((acc, curr) => acc + curr, 0);
    return ages.length ? (sum / ages.length).toFixed(2) : 0;
  };

  return (
    <section>
      <h2>Bài 4: Tuổi Trung Bình</h2>
      <p>
        Tuổi trung bình: {averageAge(...employees.map((emp) => emp.age))} năm
      </p>
    </section>
  );
};

export default Exercise4;