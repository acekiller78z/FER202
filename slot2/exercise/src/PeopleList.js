function PeopleList() {
  const people = [
    { ten: "Hoàng Nè", tuoi: "21", nghe_nghiep: "kỹ sư" },
    { ten: "Quang Nè", tuoi: "20", nghe_nghiep: "coder" },
    { ten: "Huy Nè", tuoi: "20", nghe_nghiep: "dân phòng" },
    { ten: "Mai Nè", tuoi: "16", nghe_nghiep: "học sinh" },
  ];

  return (
    <div>
      <h2>Danh sách người</h2>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            Tên: {person.ten}, Tuổi: {person.tuoi}, Nghề nghiệp: {person.nghe_nghiep}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleList;