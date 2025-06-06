import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PizzaMenu from './PizzaMenu';
import PizzaCarousel from './Carousel ';
import BookingForm from './BookingForm';
import CustomNavbar from './NavBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Navigation Bar */}
        <CustomNavbar/>
        
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