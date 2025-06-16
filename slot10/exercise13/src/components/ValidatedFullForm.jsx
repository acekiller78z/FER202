import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

function ValidatedFullForm() {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const [gender, setGender] = useState("");
  const [genderTouched, setGenderTouched] = useState(false);

  const [country, setCountry] = useState("");
  const [countryTouched, setCountryTouched] = useState(false);

  const [agreed, setAgreed] = useState(false);
  const [agreedTouched, setAgreedTouched] = useState(false);

  const [formValid, setFormValid] = useState(false);

  // Kiểm tra tính hợp lệ tổng thể
  useEffect(() => {
    const isFormValid =
      name.trim().length >= 3 &&
      gender !== "" &&
      country !== "" &&
      agreed;
    setFormValid(isFormValid);
  }, [name, gender, country, agreed]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <Form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setNameTouched(true)}
          isInvalid={nameTouched && name.trim().length < 3}
        />
        <Form.Control.Feedback type="invalid">
          Name must be at least 3 characters long.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Gender</Form.Label>
        <div onBlur={() => setGenderTouched(true)}>
          <Form.Check
            inline
            label="Male"
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            inline
            label="Female"
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            inline
            label="Other"
            type="radio"
            name="gender"
            value="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        {genderTouched && gender === "" && (
          <div className="text-danger mt-1">Please select a gender.</div>
        )}
      </Form.Group>

      <Form.Group controlId="formCountry" className="mt-3">
        <Form.Label>Country</Form.Label>
        <Form.Select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          onBlur={() => setCountryTouched(true)}
          isInvalid={countryTouched && country === ""}
          isValid={country !== ""}
        >
          <option value="">-- Select a country --</option>
          <option value="danang">Đà Nẵng</option>
          <option value="hanoi">Hà Nội</option>
          <option value="hcm">TP. Hồ Chí Minh</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Please select a country.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formCheckbox" className="mt-3">
        <Form.Check
          type="checkbox"
          label="I agree to the terms and conditions"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          onBlur={() => setAgreedTouched(true)}
          isInvalid={agreedTouched && !agreed}
        />
        {!agreed && agreedTouched && (
          <div className="text-danger mt-1">
            You must agree to the terms and conditions.
          </div>
        )}
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

export default ValidatedFullForm;
