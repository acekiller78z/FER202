function AreAllTeenagers() {
  const people = [
    { ten: "Hoàng Nè", tuoi: "21", nghe_nghiep: "kỹ sư" },
    { ten: "Quang Nè", tuoi: "20", nghe_nghiep: "coder" },
    { ten: "Huy Nè", tuoi: "20", nghe_nghiep: "dân phòng" },
    { ten: "Mai Nè", tuoi: "16", nghe_nghiep: "học sinh" },
  ];

  const allTeenagers = people.every((person) => {
    const age = parseInt(person.tuoi, 10);
    return age >= 13 && age <= 19;
  });

  return (
    <div>
      <h2>Kiểm tra thiếu niên</h2>
      <p>{allTeenagers ? "Tất cả đều là thiếu niên" : "Không phải tất cả là thiếu niên"}</p>
    </div>
  );
}

export default AreAllTeenagers;