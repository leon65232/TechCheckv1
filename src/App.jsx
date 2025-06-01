import React from 'react';
import MicTest from './components/MicTest';
import HeadphoneCheck from './components/HeadphoneCheck';
import Keyboard from "./components/Keyboard";
import Mouse from "./components/Mouse";
import Map from "./components/Map";
import Chatbot from "./pages/chatbot";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Store } from "./context/Context";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css'; 

const AppContent = () => {
  const { darkMode } = Store();
  const location = useLocation();

  const hideLayout = location.pathname === '/chatbot';

  return (
    // <div className="flex flex-row items-center justify-center bg-gray-100">
    //   {/* <Keyboard /> */}
    //   {/* <Mouse /> */}
    // </div>
    
    <div>
      {/* Komponen lain */}

      {!hideLayout && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/chatbot' element={<Chatbot />}/>
      </Routes>
      {!hideLayout && <Footer />}

      {/* <MicTest /> */}
      {/* <h1 className="text-center text-2xl font-bold mt-10">Headphone Test</h1> */}
      {/* <HeadphoneCheck /> */}
      {/* <Chatbot /> */}
      {/* <Map googleMapsApiKey='AIzaSyDj63pqt9XEjmOk0-j7NZ5FeuKg0-gPhts' /> */}
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;

// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import CheckMapSection from './components/CheckMapSection';
// import Footer from './components/Footer';
// import ChatbotSection from './components/ChatbotSection';
// import FactSection from './components/FactSection';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={
//           <>
//             <div id="home"><Hero /></div> {/* Section for Home */}
//             <div id="check"><CheckMapSection /></div> {/* Section for Check */}
//             <div id="map"><ChatbotSection /></div> {/* Section for Map */}
//             <div id="about-us"><FactSection /></div> {/* Section for About Us */}
//             <Footer />
//           </>
//         } />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
