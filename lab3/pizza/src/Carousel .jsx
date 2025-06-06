import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import pizza1 from './asset/pizza1.jpg';
import pizza2 from './asset/pizza2.jpg';
import pizza3 from './asset/pizza3.jpg';
import pizza4 from './asset/pizza4.jpg';
import pizza5 from './asset/pizza5.jpg';

const pizzas = [
  { img: pizza1, title: 'Neapolitan Pizza 1' },
  { img: pizza2, title: 'Neapolitan Pizza 2' },
  { img: pizza3, title: 'Neapolitan Pizza 3' },
  { img: pizza4, title: 'Neapolitan Pizza 4' },
  { img: pizza5, title: 'Neapolitan Pizza 5' },
];

const PizzaCarousel = () => {
  return (
    <Carousel interval={3000} fade>
      {pizzas.map((pizza, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={pizza.img}
            alt={`Pizza ${index + 1}`}
          />
          <Carousel.Caption>
            <h2
              style={{
                fontWeight: 'bold',
                fontFamily: 'serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
              }}
            >
              {pizza.title}
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                textShadow: '1px 1px 3px rgba(0,0,0,0.6)',
              }}
            >
              If you are looking for traditional Italian pizza, the Neapolitan is
              the best option!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PizzaCarousel;
