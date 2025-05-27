import React from 'react';
import MicTest from './components/MicTest';
import HeadphoneCheck from './components/HeadphoneCheck';
import Keyboard from "./components/Keyboard";
import Mouse from "./components/Mouse";
import Map from "./components/Map";
import Chatbot from "./pages/chatbot";
import { Store } from "./context/Context";
const App = () => {
  const { darkMode } = Store();
  return (
    // <div className="flex flex-row items-center justify-center bg-gray-100">
    //   {/* <Keyboard /> */}
    //   {/* <Mouse /> */}
    // </div>
    
    <div className="App">
      {/* Komponen lain */}
      <MicTest />
      <h1 className="text-center text-2xl font-bold mt-10">Headphone Test</h1>
      <HeadphoneCheck />
      <Chatbot />
      <Map googleMapsApiKey='AIzaSyDj63pqt9XEjmOk0-j7NZ5FeuKg0-gPhts' />
    </div>
  );
};

export default App;
