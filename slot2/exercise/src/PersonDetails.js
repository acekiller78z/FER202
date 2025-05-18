function PersonDetails() {
  const people = [
    { ten: "Hoàng Nè", tuoi: "21", nghe_nghiep: "kỹ sư" },
    { ten: "Quang Nè", tuoi: "20", nghe_nghiep: "coder" },
    { ten: "Huy Nè", tuoi: "20", nghe_nghiep: "dân phòng" },
    { ten: "Mai Nè", tuoi: "16", nghe_nghiep: "học sinh" },
  ];

  return (
    <div>
      <h2>Thông tin chi tiết</h2>
      {people.map((person, index) => (
        <div key={index}>
          <h3>{person.ten}</h3>
          <p>Tuổi: {person.tuoi}</p>
          <p>Nghề nghiệp: {person.nghe_nghiep}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PersonDetails;