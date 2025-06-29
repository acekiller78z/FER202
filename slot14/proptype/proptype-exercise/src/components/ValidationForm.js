import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Container, Alert, Row, Col } from "react-bootstrap";

const ValidationForm = ({ title, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };


  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10,15}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    
    if (!formData.name.trim()) {
      newErrors.name = "Tên không được để trống!";
    } else if (formData.name.trim().length < 3 || formData.name.trim().length > 50) {
      newErrors.name = "Tên phải chứa từ 3 đến 50 ký tự!";
    }

    if (!formData.age) {
      newErrors.age = "Tuổi không được để trống!";
    } else if (isNaN(formData.age)) {
      newErrors.age = "Tuổi phải là một số hợp lệ!";
    } else {
      const age = parseInt(formData.age);
      if (age < 18 || age > 100) {
        newErrors.age = "Tuổi phải nằm trong khoảng từ 18 đến 100!";
      }
    }

    
    if (!formData.email) {
      newErrors.email = "Email không được để trống!";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email không đúng định dạng!";
    }

    // Validate số điện thoại: từ 10-15 chữ số
    if (!formData.phone) {
      newErrors.phone = "Số điện thoại không được để trống!";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Số điện thoại phải chứa từ 10 đến 15 chữ số!";
    }

    // Validate đồng ý điều khoản
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "Bạn phải đồng ý với điều khoản!";
    }

    setErrors(newErrors);
    
    // Hiển thị alert nếu có lỗi
    if (Object.keys(newErrors).length > 0) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }

    return Object.keys(newErrors).length === 0;
  };

  // Hàm submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Container>
      <h3 className="mb-4">{title}</h3>
      
      {/* Hiển thị Alert nếu có lỗi */}
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          <strong>Lỗi:</strong> Vui lòng kiểm tra và sửa các lỗi bên dưới.
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Tên *</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
                placeholder="Nhập tên của bạn"
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          
          <Col md={6}>
            <Form.Group controlId="formAge" className="mb-3">
              <Form.Label>Tuổi *</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                isInvalid={!!errors.age}
                placeholder="Nhập tuổi"
                min="18"
                max="100"
              />
              <Form.Control.Feedback type="invalid">
                {errors.age}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                placeholder="example@email.com"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          
          <Col md={6}>
            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Số điện thoại *</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                isInvalid={!!errors.phone}
                placeholder="0123456789"
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formAgreeToTerms" className="mb-3">
          <Form.Check
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            isInvalid={!!errors.agreeToTerms}
            label="Tôi đồng ý với các điều khoản và điều kiện sử dụng"
          />
          <Form.Control.Feedback type="invalid">
            {errors.agreeToTerms}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" size="lg">
          Đăng Ký
        </Button>
      </Form>
    </Container>
  );
};

ValidationForm.propTypes = {
  title: PropTypes.string.isRequired, // Tiêu đề phải là một chuỗi
  onSubmit: PropTypes.func.isRequired, // Hàm onSubmit phải là một function
};

export default ValidationForm; 