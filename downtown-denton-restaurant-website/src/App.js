import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing component modules
import NavBar from './components/NavigationBar/NavBar';
import { Hero as Home} from './components/Home';
import  AboutUs from './components/AboutUs';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
// import { EventCarousel as SpecialEvents } from './components/SpecialEvents';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          {/* <Route path="/events" element={<SpecialEvents />} /> */}
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
