import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import menu1 from './asset/menu1.jpg';
import menu2 from './asset/menu2.jpg';
import menu3 from './asset/menu3.jpg';
import menu4 from './asset/menu4.jpg';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { left } from '@popperjs/core';

const PizzaMenu = () => {
  const pizzas = [
    {
      name: 'Margherita Pizza',
      price: 40.00,
      originalPrice: 50.00,
      imageSrc: menu1,
      badge: 'SALE',
      backgroundColor: '#fff', 
    },
    {
      name: 'Mushroom Pizza',
      price: 50.00,
      originalPrice: null,
      imageSrc: menu2,
      badge: null,
      backgroundColor: '#fff',
    },
    {
      name: 'Pesto Pizza',
      price: 40.00,
      originalPrice: 50.00,
      imageSrc: menu3,
      badge: 'NEW',
      backgroundColor: '#fff',
    },
    {
      name: 'Hawaiian Pizza',
      price: 45.00,
      originalPrice: 55.00,
      imageSrc: menu4,
      badge: 'SALE',
      backgroundColor: '#fff',
    },
  ];
  return (
    <section className="menu-section py-5" style={{ backgroundColor: '#2b2b2b' }}>
      <div className="container ps-5">
        <h2 className="text-white mb-4 text-start " >Our Menu</h2>
        <div className="row ">
          {pizzas.map((pizza, index) => (
            <div className="col-md-3 mb-4" key={index} >
              <div
                className="card position-relative"
                style={{
                  backgroundColor: pizza.backgroundColor,
                  border: 'none',
                  borderRadius: '5px',
                  overflow: 'hidden',
                  color: '#000',
                  height: '350px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {pizza.badge && (
                  <span
                    className="badge"
                    style={{
                      position: 'Absolute',
                      backgroundColor: '#ffeb3b',
                      color: '#000',
                      fontWeight: 'bold',
                      padding: '5px 10px',
                    }}
                  >
                    {pizza.badge}
                  </span>
                )}
                <img
                  src={pizza.imageSrc}
                  alt={pizza.name}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body" style={{ textAlign: 'left' }}>
                  <h5 className="card-title">{pizza.name}</h5>
                  <p className="card-text">
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
                        <span style={{ color: '#ffca28', fontWeight: 'bold' }}>
                          ${pizza.price.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                        ${pizza.price.toFixed(2)}
                      </span>
                    )}
                  </p>
                  <div style={{ textAlign: 'center' }}>
                    <button
                      className="btn"
                      style={{ backgroundColor: '#333', color: '#fff', width: '100%' }}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PizzaMenu;