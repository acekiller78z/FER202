import React, { useState } from "react";
import { Container, Nav, Navbar, Tab, Tabs, Alert } from "react-bootstrap";
import UserProfile from "./components/UserProfile";
import UserProfile2 from "./components/UserProfile2";
import MyForm from "./components/MyForm";
import ValidationForm from "./components/ValidationForm";

const App = () => {
  const [activeTab, setActiveTab] = useState("example1");
  const [submittedData, setSubmittedData] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // Hàm xử lý submit cho UserProfile2
  const handleUserProfile2Submit = (formData) => {
    console.log("Dữ liệu UserProfile2 đã gửi:", formData);
    setSubmittedData(formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  // Hàm xử lý submit cho MyForm
  const handleMyFormSubmit = (formData) => {
    console.log("Dữ liệu MyForm đã gửi:", formData);
    setSubmittedData(formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  // Hàm xử lý submit cho ValidationForm
  const handleValidationFormSubmit = (formData) => {
    console.log("Dữ liệu ValidationForm đã gửi:", formData);
    setSubmittedData(formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#home">PropTypes Demo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Trang chủ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <h1 className="text-center mb-4">Ứng Dụng React với PropTypes</h1>
        <p className="text-center mb-4">
          Demo về việc sử dụng PropTypes để validate dữ liệu trong React components
        </p>

        {/* Hiển thị thông báo thành công */}
        {showSuccess && (
          <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
            <strong>Thành công!</strong> Dữ liệu đã được gửi thành công.
            <pre className="mt-2">{JSON.stringify(submittedData, null, 2)}</pre>
          </Alert>
        )}

        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          className="mb-4"
        >
          <Tab eventKey="example1" title="Ví dụ 1: UserProfile">
            <div className="p-4">
              <h3>Ví dụ 1: Kiểm tra thông tin người dùng</h3>
              <p className="mb-4">
                Component đơn giản với PropTypes validation cho name và age.
              </p>
              
              <div className="row">
                <div className="col-md-6">
                  <h5>Trường hợp hợp lệ:</h5>
                  <UserProfile name="Nguyễn Văn A" age={25} />
                </div>
                <div className="col-md-6">
                  <h5>Trường hợp không hợp lệ:</h5>
                  <UserProfile name="" age={25} />
                  <UserProfile name="Nguyễn Văn B" age="twenty five" />
                  <UserProfile name="Nguyễn Văn C" age={null} />
                </div>
              </div>
            </div>
          </Tab>

          <Tab eventKey="example2" title="Ví dụ 2: UserProfile2">
            <div className="p-4">
              <h3>Ví dụ 2: Form với React Bootstrap</h3>
              <p className="mb-4">
                Component form sử dụng React Bootstrap với validation nâng cao.
              </p>
              
              <div className="row">
                <div className="col-md-6">
                  <h5>Form hợp lệ:</h5>
                  <UserProfile2 
                    name="Nguyễn Văn A" 
                    age={25} 
                    onSubmit={handleUserProfile2Submit} 
                  />
                </div>
                <div className="col-md-6">
                  <h5>Form không hợp lệ:</h5>
                  <UserProfile2 
                    name="Nguyễn Văn B" 
                    age="twenty five" 
                    onSubmit={handleUserProfile2Submit} 
                  />
                  <UserProfile2 
                    name="" 
                    age={30} 
                    onSubmit={handleUserProfile2Submit} 
                  />
                </div>
              </div>
            </div>
          </Tab>

          <Tab eventKey="example3" title="Ví dụ 3: MyForm">
            <div className="p-4">
              <h3>Ví dụ 3: Form với useReducer</h3>
              <p className="mb-4">
                Component form sử dụng useReducer để quản lý state và PropTypes validation.
              </p>
              
              <MyForm 
                title="Đăng Ký Người Dùng" 
                onSubmit={handleMyFormSubmit} 
              />
            </div>
          </Tab>

          <Tab eventKey="exercise19" title="Exercise 19: ValidationForm">
            <div className="p-4">
              <h3>Exercise 19: Demo về Validation trong component</h3>
              <p className="mb-4">
                Form với validation toàn diện:
              </p>
              <ul className="mb-4">
                <li>Tên không được để trống, chứa 3-50 kí tự</li>
                <li>Tuổi không được để trống, từ 18-100 tuổi</li>
                <li>Email không được để trống, đúng định dạng</li>
                <li>Số điện thoại: từ 10-15 chữ số</li>
                <li>Phải đồng ý với điều khoản</li>
              </ul>
              
              <ValidationForm 
                title="Form Đăng Ký với Validation Toàn Diện" 
                onSubmit={handleValidationFormSubmit} 
              />
            </div>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default App; 