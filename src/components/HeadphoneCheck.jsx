import React, { useState, useRef } from 'react';

const HeadphoneCheck = () => {
  const [playingLeft, setPlayingLeft] = useState(false);
  const [playingRight, setPlayingRight] = useState(false);
  const leftAudioRef = useRef(null);
  const rightAudioRef = useRef(null);

  const playLeft = () => {
    setPlayingRight(false);
    rightAudioRef.current.pause();
    rightAudioRef.current.currentTime = 0;
    leftAudioRef.current.play();
    setPlayingLeft(true);
  };

  const stopLeft = () => {
    leftAudioRef.current.pause();
    leftAudioRef.current.currentTime = 0;
    setPlayingLeft(false);
  };

  const playRight = () => {
    setPlayingLeft(false);
    leftAudioRef.current.pause();
    leftAudioRef.current.currentTime = 0;
    rightAudioRef.current.play();
    setPlayingRight(true);
  };

  const stopRight = () => {
    rightAudioRef.current.pause();
    rightAudioRef.current.currentTime = 0;
    setPlayingRight(false);
  };

  const toggleLeft = () => {
    if (playingLeft) stopLeft();
    else playLeft();
  };

  const toggleRight = () => {
    if (playingRight) stopRight();
    else playRight();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-10">
      <div className="flex justify-center gap-20">
        <div className="flex flex-col items-center">
          <img src="/Left Headphone.png" alt="Left Headphone" className="w-32" />
          <button
            onClick={toggleLeft}
            className={`mt-4 px-6 py-2 rounded-lg text-white font-semibold flex items-center gap-2 ${
              playingLeft ? 'bg-red-500' : 'bg-blue-600'
            }`}
          >
            <span>{playingLeft ? 'Stop' : 'Play sound'}</span>
            <span className="text-sm">Left speaker</span>
          </button>
        </div>

        <div className="flex flex-col items-center">
          <img src="/Right Headphone.png" alt="Right Headphone" className="w-32" />
          <button
            onClick={toggleRight}
            className={`mt-4 px-6 py-2 rounded-lg text-white font-semibold flex items-center gap-2 ${
              playingRight ? 'bg-red-500' : 'bg-blue-600'
            }`}
          >
            <span>{playingRight ? 'Stop' : 'Play sound'}</span>
            <span className="text-sm">Right speaker</span>
          </button>
        </div>
      </div>

      <div className="hidden">
        <audio ref={leftAudioRef} src="/Left.mp3" />
        <audio ref={rightAudioRef} src="/Right.mp3" />
      </div>
    </div>
  );
};

export default HeadphoneCheck;
