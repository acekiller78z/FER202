function OldestAndYoungest() {
  const people = [
    { ten: "Hoàng Nè", tuoi: "21", nghe_nghiep: "kỹ sư" },
    { ten: "Quang Nè", tuoi: "20", nghe_nghiep: "coder" },
    { ten: "Huy Nè", tuoi: "20", nghe_nghiep: "dân phòng" },
    { ten: "Mai Nè", tuoi: "16", nghe_nghiep: "học sinh" },
  ];

  if (!people.length) {
    return (
      <div>
        <h2>Người già nhất và trẻ nhất</h2>
        <p>Không có dữ liệu</p>
      </div>
    );
  }

  const ages = people.map(p => parseInt(p.tuoi, 10));
  const maxAge = Math.max(...ages);
  const minAge = Math.min(...ages);

  const oldestPeople = people.filter(p => parseInt(p.tuoi, 10) === maxAge);
  const youngestPeople = people.filter(p => parseInt(p.tuoi, 10) === minAge);

  return (
    <div>
      <h2>Người già nhất và trẻ nhất</h2>
      
      <h3>Người già nhất (Tuổi: {maxAge})</h3>
      {oldestPeople.map((person, index) => (
        <div key={index}>
          <p>Tên: {person.ten}</p>
          <p>Tuổi: {person.tuoi}</p>
          <p>Nghề nghiệp: {person.nghe_nghiep}</p>
          {index < oldestPeople.length - 1 && <hr />}
        </div>
      ))}

      <h3>Người trẻ nhất (Tuổi: {minAge})</h3>
      {youngestPeople.map((person, index) => (
        <div key={index}>
          <p>Tên: {person.ten}</p>
          <p>Tuổi: {person.tuoi}</p>
          <p>Nghề nghiệp: {person.nghe_nghiep}</p>
          {index < youngestPeople.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
}

export default OldestAndYoungest;