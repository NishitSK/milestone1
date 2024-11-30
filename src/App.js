// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Menu from './components/Menu';
// import Reservations from './components/Reservations';
// import Contact from './components/Contact';
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/menu" element={<Menu />} />
//           <Route path="/reservations" element={<Reservations />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import Contact from './components/Contact';
import AboutUs from './components/About'; // Import the AboutUs component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} /> {/* Add About route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

