import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PizzaMenu from './PizzaMenu';
import PizzaCarousel from './Carousel ';
import BookingForm from './BookingForm';
import Navbar from './NavBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Navigation Bar */}
        <Navbar/>
        
        {/* Hero Section with Pizza Banner */}
        <PizzaCarousel/>

        {/* Menu Section - Using PizzaMenu Component */}
        <PizzaMenu />

        {/* Booking Section */}
        <BookingForm/>
      </div>
    );
  }
}

export default App;