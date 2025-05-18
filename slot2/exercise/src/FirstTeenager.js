function FirstTeenager() {
  const people = [
    { ten: "Hoàng Nè", tuoi: "21", nghe_nghiep: "kỹ sư" },
    { ten: "Quang Nè", tuoi: "20", nghe_nghiep: "coder" },
    { ten: "Huy Nè", tuoi: "20", nghe_nghiep: "dân phòng" },
    { ten: "Mai Nè", tuoi: "16", nghe_nghiep: "học sinh" },
  ];

  const teenager = people.find((person) => {
    const age = parseInt(person.tuoi, 10);
    return age >= 13 && age <= 19;
  });

  return (
    <div>
      <h2>Thiếu niên đầu tiên</h2>
      {teenager ? (
        <div>
          <p>Tên: {teenager.ten}</p>
          <p>Tuổi: {teenager.tuoi}</p>
          <p>Nghề nghiệp: {teenager.nghe_nghiep}</p>
        </div>
      ) : (
        <p>Không tìm thấy thiếu niên</p>
      )}
    </div>
  );
}

export default FirstTeenager;