import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

function ValidatedLoginForm() {
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setEmailValid(isValidEmail(email));
  }, [email]);

  useEffect(() => {
    setPasswordValid(password.length >= 8);
  }, [password]);

  useEffect(() => {
    setFormValid(emailValid && passwordValid);
  }, [emailValid, passwordValid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      alert("Form đã gửi thành công!");
    }
  };

  return (
    <Form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          placeholder="Nhập email"
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
          isInvalid={emailTouched && !emailValid}
        />
        <Form.Control.Feedback type="invalid">
          Email không hợp lệ. Vui lòng nhập lại!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPassword" className="mt-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          placeholder="Nhập mật khẩu"
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setPasswordTouched(true)}
          isInvalid={passwordTouched && !passwordValid}
        />
        <Form.Control.Feedback type="invalid">
          Mật khẩu phải có ít nhất 8 ký tự!
        </Form.Control.Feedback>
      </Form.Group>

      <Button
        className="mt-4"
        variant="primary"
        type="submit"
        disabled={!formValid}
      >
        Submit
      </Button>
    </Form>
  );
}

export default ValidatedLoginForm;
