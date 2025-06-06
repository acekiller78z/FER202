import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BookingForm() {
  return (
    <div className="text-white py-5" style={{ backgroundColor: '#2b2b2b' }}>
      <Container className="ps-5">
        <h2 className="text-center mb-4">Book Your Table</h2>
        <Form>
          <Row className="mb-3">
            <Col md={4}>
              <Form.Control type="text" placeholder="Your Name *" required />
            </Col>
            <Col md={4}>
              <Form.Control type="email" placeholder="Your Email *" required />
            </Col>
            <Col md={4}>
              <Form.Select>
                <option>Select a Service</option>
                <option>Dine-in</option>
                <option>Takeaway</option>
                <option>Delivery</option>
              </Form.Select>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={5} placeholder="Please write your comment" />
          </Form.Group>

          <div className="text-start">
            <Button
              type="submit"
              style={{ backgroundColor: '#f9b401', borderColor: '#f9b401', color: '#fff' }}
            >
              Send Message
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default BookingForm;
