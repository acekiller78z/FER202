import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pizza1 from './asset/pizza1.jpg';
import pizza2 from './asset/pizza2.jpg';
import pizza3 from './asset/pizza3.jpg';
import pizza4 from './asset/pizza4.jpg';
import pizza5 from './asset/pizza5.jpg';

const PizzaCarousel = () => {
  return (
    <div id="pizzaCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators">
        {[0, 1, 2, 3, 4].map((i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#pizzaCarousel"
            data-bs-slide-to={i}
            className={i === 0 ? 'active' : ''}
            aria-current={i === 0 ? 'true' : undefined}
            aria-label={`Slide ${i + 1}`}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {[pizza1, pizza2, pizza3, pizza4, pizza5].map((img, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
             data-bs-interval="3000"
          >
            <img src={img} className="d-block w-100" alt={`Pizza ${index + 1}`} />
            <div className="carousel-caption d-none d-md-block">
                <div className="carousel-caption d-none d-md-block">
                    <h2 style={{ fontWeight: 'bold', fontFamily: 'serif', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                        Neapolitan Pizza {index + 1}
                    </h2>
                    <p style={{ fontSize: '1.1rem', textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>
                        If you are looking for traditional Italian pizza, the Neapolitan is the best option!
                    </p>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#pizzaCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#pizzaCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default PizzaCarousel;
