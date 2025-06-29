import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const bannerSlides = ['slide1.jpg', 'slide2.jpg', 'slide3.jpg'];
const menuImages = [
  'menu-01.jpg', 'menu-02.jpg', 'menu-03.jpg', 'menu-04.jpg',
  'menu-05.jpg', 'menu-06.jpg',
];

function Home() {
  return (  
    <div>
      <Container fluid className="p-0">
        <Carousel fade>
          {bannerSlides.map((img, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + '/images/' + img}
                alt={`Slide ${index + 1}`}
                style={{
                  width: '100%',
                  maxHeight: '500px',
                  objectFit: 'cover',
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 40,
        }}>
          {menuImages.map((img) => (
            <div key={img} style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid #fff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              background: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img
                src={process.env.PUBLIC_URL + '/images/' + img}
                alt={img}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        <div style={{
          textAlign: 'left',
          color: 'red',
          fontSize: 24,
          fontWeight: 500,
          marginTop: 20,
           paddingLeft: '340px',
        }}>
          This is Home Page
        </div>
      </Container>
    </div>
  );
}

export default Home;
