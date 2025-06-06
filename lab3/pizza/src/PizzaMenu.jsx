import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';

import menu1 from './asset/menu1.jpg';
import menu2 from './asset/menu2.jpg';
import menu3 from './asset/menu3.jpg';
import menu4 from './asset/menu4.jpg';

const pizzas = [
  {
    name: 'Margherita Pizza',
    price: 40.0,
    originalPrice: 50.0,
    imageSrc: menu1,
    badge: 'SALE',
  },
  {
    name: 'Mushroom Pizza',
    price: 50.0,
    originalPrice: null,
    imageSrc: menu2,
    badge: null,
  },
  {
    name: 'Pesto Pizza',
    price: 50.0,
    originalPrice:null,
    imageSrc: menu3,
    badge: 'NEW',
  },
  {
    name: 'Hawaiian Pizza',
    price: 45.0,
    originalPrice: 55.0,
    imageSrc: menu4,
    badge: 'SALE',
  },
];

const PizzaMenu = () => {
  return (
    <section style={{ backgroundColor: '#2b2b2b' }} className="py-5">
      <Container className="ps-5">
        <h2 className="text-white mb-4 text-start">Our Menu</h2>
        <Row className="justify-content-start g-1">
          {pizzas.map((pizza, index) => (
            <Col md={3}key={index} style={{ paddingLeft: '2px', paddingRight: '2px' }}>
              <Card
                style={{
                  position: 'relative',
                  borderRadius: '5px',
                  height: '400px',
                  color: '#000',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid white',
                  boxShadow: '0 4px 8px rgba(255, 255, 255, 0.15)',
                  backgroundColor: pizza.backgroundColor || '#fff', 
                  maxWidth: '270px',
                }}
              >

                {pizza.badge && (
                   <Badge
                    bg="warning"
                    text="dark"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      fontWeight: 'bold',
                      padding: '5px 10px',
                      borderTopLeftRadius: '0.25rem',
                      borderBottomRightRadius: '0.25rem',
                    }}
                  >
                    {pizza.badge}
                  </Badge>
                )}
                <Card.Img
                  variant="top"
                  src={pizza.imageSrc}
                  alt={pizza.name}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body
                  style={{
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flexGrow: 1,
                  }}
                >
                  <div>
                    <Card.Title>{pizza.name}</Card.Title>
                    <Card.Text>
                      {pizza.originalPrice ? (
                        <>
                          <span
                            style={{
                              textDecoration: 'line-through',
                              color: '#666',
                              marginRight: '5px',
                            }}
                          >
                            ${pizza.originalPrice.toFixed(2)}
                          </span>
                          <span
                            style={{
                              color: '#ffca28',
                              fontWeight: 'bold',
                            }}
                          >
                            ${pizza.price.toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                          ${pizza.price.toFixed(2)}
                        </span>
                      )}
                    </Card.Text>
                  </div>

                  <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                    <Button variant="dark" style={{ width: '100%' }}>
                      Buy
                    </Button>
                  </div>
                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PizzaMenu;
