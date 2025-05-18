function NamePerson() {
  const names = ["Alice", "Bob", "Charlie"];
  return (
    <div>
      <h2>Danh sách tên</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NamePerson;