import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing component modules
import NavBar from './components/NavigationBar/NavBar';
import Hero from './components/Home/Hero';
import FeaturedDishesAndReviews from './components/Home/FeaturedDishesAndReviews';
import AboutUs from './components/AboutUs';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import SpecialEvents from './components/SpecialEvents/EventCarousel';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <FeaturedDishesAndReviews />
      {/* <AboutUs /> */}
      {/* <Menu /> */}
      {/* <Reservation /> */}
      {/* <SpecialEvents /> */}
      {/* <Testimonials /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default App;
