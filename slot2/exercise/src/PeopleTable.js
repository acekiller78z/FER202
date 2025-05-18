function PeopleTable() {
  const people = [
    { ten: "Hoàng Nè", tuoi: "21", nghe_nghiep: "kỹ sư" },
    { ten: "Quang Nè", tuoi: "20", nghe_nghiep: "coder" },
    { ten: "Huy Nè", tuoi: "20", nghe_nghiep: "dân phòng" },
    { ten: "Mai Nè", tuoi: "16", nghe_nghiep: "học sinh" },
  ];

  return (
    <div>
      <h2>Bảng danh sách người</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Nghề nghiệp</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
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

export default PeopleTable;