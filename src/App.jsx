import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/slices/exsamplaSlice';
import Swal from 'sweetalert2';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => {
  const value = useSelector((state) => state.example.value);
  const dispatch = useDispatch();

  return (
    <Router>
      <div>
        <Navbar />
        <main className="container mx-auto p-4">
          <h1>Value: {value}</h1>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;