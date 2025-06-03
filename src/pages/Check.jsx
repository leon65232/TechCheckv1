// src/pages/Home.jsx
import React from 'react';
import Keyboard from '../components/Keyboard';  // Correct the path
import Mouse from '../components/Mouse';      // Correct the path
import MicTest from '../components/MicTest';  // Correct the path
import HeadphoneCheck from '../components/HeadphoneCheck';  // Correct the path
import './Check.css';


const Check = () => {
  return (
    <div className='main'>
      <div className='flex items-center justify-around'>
        <Keyboard />
        <Mouse />
      </div>
      <MicTest />
      <HeadphoneCheck />
    </div>
  );
}

export default Check;
