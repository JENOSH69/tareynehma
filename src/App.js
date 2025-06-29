// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

//import Home from "./pages/Home";
import Hero from "./components/Hero";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import BookingPage from './pages/BookingPage';

import FoodMenuSection from "./components/FoodMenuSection";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <About />
              <Rooms />
              <FoodMenuSection />
            </Layout>
          }
        />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/rooms" element={<Layout><Rooms /></Layout>} />
         <Route path="/booking" element={<Layout><BookingPage /></Layout>} />

        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
