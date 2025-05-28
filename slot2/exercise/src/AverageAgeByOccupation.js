function AverageAgeByOccupation() {
  const people = [
    { ten: "Hoàng Nè", tuoi: "21", nghe_nghiep: "kỹ sư" },
    { ten: "Quang Nè", tuoi: "20", nghe_nghiep: "coder" },
    { ten: "Huy Nè", tuoi: "20", nghe_nghiep: "dân phòng" },
    { ten: "Mai Nè", tuoi: "16", nghe_nghiep: "học sinh" },
  ];

  if (!people.length) {
    return (
      <div>
        <h2>Tuổi trung bình theo nghề nghiệp</h2>
        <p>Không có dữ liệu</p>
      </div>
    );
  }

  const occupationAges = people.reduce((groups, person) => {
    const occupation = person.nghe_nghiep;
    const age = parseInt(person.tuoi, 10);
    if (!groups[occupation]) {
      groups[occupation] = { totalAge: 0, count: 0 };
    }
    groups[occupation].totalAge += age;
    groups[occupation].count += 1;
    return groups;
  }, {});

  const averageAges = Object.keys(occupationAges).map(occupation => ({
    occupation,
    averageAge: (occupationAges[occupation].totalAge / occupationAges[occupation].count).toFixed(2),
  }));

  return (
    <div>
      <h2>Tuổi trung bình theo nghề nghiệp</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Nghề nghiệp</th>
            <th>Tuổi trung bình</th>
          </tr>
        </thead>
        <tbody>
          {averageAges.map((item, index) => (
            <tr key={index}>
              <td>{item.occupation}</td>
              <td>{item.averageAge}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AverageAgeByOccupation;