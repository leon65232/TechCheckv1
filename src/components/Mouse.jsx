import { useEffect, useState } from 'react';
import { Store } from '../context/Context';
import { buttons } from '../data/Button';
const Mouse = () => {
  const { darkMode } = Store();
  // add 'isPressed' property to all keys
  const [allButtons, setAllButtons] = useState(
    buttons.map((key) => ({
      label: key.label,
      keyCode: key.keyCode,
      isPressed: false,
    }))
  );

  useEffect(() => {
    const activeMouseHandler = (event) => {
      // prevent default functionality
      event.preventDefault();
      console.log(event.button);
      const index = event.button;
      if (index !== -1) {
        // updating 'isPressed' prop of a key that matches
        const updatedButtons = [...allButtons];
        updatedButtons[index].isPressed = true;
        setAllButtons(updatedButtons);
      } else {
        console.log('key not found');
      }
    };
    
    window.addEventListener('mousedown', activeMouseHandler);
    // cleanup function.
    return () => window.removeEventListener('mouseup', activeMouseHandler);
  }, []);
  
  useEffect(() => {
    const activeScrollHandler = (event) => {
        // event.preventDefault();
        const dir = event.deltaY < 0 ? 'scrollup' : 'scrolldown';
        console.log(dir);
        const index = allButtons.findIndex(
          (button) => button.keyCode.toLowerCase() === dir.toLowerCase()
        );
        if (index) {
            // updating 'isPressed' prop of a key that matches
            const updatedButtons = [...allButtons];
            updatedButtons[index].isPressed = true;
            setAllButtons(updatedButtons);
            } else {
            console.log('key not found');
        }
    }
    
    document.addEventListener('wheel', activeScrollHandler, { passive: false });
    
    return () => window.removeEventListener('wheel', activeScrollHandler);
  }, []);

  //  background-color for active and non active buttons.
  const activeBtn = 'bg-red-500';
  const nonActiveBtn = darkMode ? 'bg-slate-800 text-white' : 'bg-white';

  return (
    <div className="relative w-32 h-56 mx-8 border rounded-full bg-white shadow-lg">
      {/* Left button */}
      <button
        className={`absolute top-0 left-0 w-1/2 h-1/2 border-r border-grey rounded-tl-full ${
          allButtons[0].isPressed ? activeBtn : nonActiveBtn
        }`}
      >
      </button>

      {/* Right button */}
      <button
        className={`absolute top-0 right-0 w-1/2 h-1/2 border-l border-grey rounded-tr-full ${
          allButtons[2].isPressed ? activeBtn : nonActiveBtn
        }`}
      >
      </button>

      {/* Middle scroll section */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-6 h-24 flex flex-col justify-center border border-grey rounded-full bg-white z-10 overflow-hidden">
        {/* Scroll up */}
        <button
          className={`w-full h-1/3 text-xs justify-center ${
            allButtons[3].isPressed ? activeBtn : nonActiveBtn
          }`}
        >
        ↑
        </button>

        {/* Middle button */}
        <button
          className={`w-full h-1/3 text-xs ${
            allButtons[1].isPressed ? activeBtn : nonActiveBtn
          }`}
        >
        •
        </button>

        {/* Scroll down */}
        <button
          className={`w-full h-1/3 text-xs justify-center ${
            allButtons[4].isPressed ? activeBtn : nonActiveBtn
          }`}
        >
        ↓
        </button>
      </div>
    </div>
  );
};
export default Mouse;

// last commit
