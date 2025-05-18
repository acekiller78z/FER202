function SortByOccupationAndAge() {
  const people = [
    { ten: "Hoàng Nè", tuoi: "21", nghe_nghiep: "kỹ sư" },
    { ten: "Quang Nè", tuoi: "20", nghe_nghiep: "coder" },
    { ten: "Huy Nè", tuoi: "20", nghe_nghiep: "dân phòng" },
    { ten: "Mai Nè", tuoi: "16", nghe_nghiep: "học sinh" },
  ];

  const sortedPeople = [...people].sort((a, b) => {
    if (a.nghe_nghiep < b.nghe_nghiep) return -1;
    if (a.nghe_nghiep > b.nghe_nghiep) return 1;
    return parseInt(a.tuoi, 10) - parseInt(b.tuoi, 10);
  });

  return (
    <div>
      <h2>Danh sách người (Sắp xếp theo Nghề nghiệp và Tuổi)</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Nghề nghiệp</th>
          </tr>
        </thead>
        <tbody>
          {sortedPeople.map((person, index) => (
            <tr key={index}>
              <td>{person.ten}</td>
              <td>{person.tuoi}</td>
              <td>{person.nghe_nghiep}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SortByOccupationAndAge;