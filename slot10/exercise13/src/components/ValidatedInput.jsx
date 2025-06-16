import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

// Hàm xác thực đầu vào
const validateInput = (value) => {
  return value.trim().length >= 5; // Phải có ít nhất 5 ký tự sau khi loại bỏ khoảng trắng đầu/cuối
};

function ValidatedInput() {
  const [value, setValue] = useState(""); // Giá trị nhập từ người dùng
  const [isValid, setIsValid] = useState(true); // Trạng thái hợp lệ
  const [errorMessage, setErrorMessage] = useState(""); // Thông báo lỗi

  // Theo dõi và xác thực mỗi khi giá trị thay đổi
  useEffect(() => {
    const valid = validateInput(value);
    setIsValid(valid);
    setErrorMessage(valid ? "" : "Giá trị phải có ít nhất 5 ký tự!");
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      alert("Giá trị hợp lệ: " + value);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4" style={{ maxWidth: "500px", margin: "0 auto" }}>
      <Form.Group controlId="validatedInput">
        <Form.Label>Nhập một giá trị</Form.Label>
        <Form.Control
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          isValid={isValid && value !== ""}
          isInvalid={!isValid}
          placeholder="Ít nhất 5 ký tự"
        />
        <Form.Control.Feedback type="invalid">
          {errorMessage}
        </Form.Control.Feedback>
      </Form.Group>

      <Button className="mt-3" variant="primary" type="submit" disabled={!isValid}>
        Gửi
      </Button>
    </Form>
  );
}

export default ValidatedInput;
