import { useEffect, useState } from "react";
import { Store } from "../context/Context";
import { keys } from "../data/Keys";
const Keyboard = () => {
  const { darkMode } = Store();
  // add 'isPressed' property to all keys
  const [allKeys, setAllKeys] = useState(
    keys.map((key) => ({
      label: key.label,
      keyCode: key.keyCode,
      isPressed: false,
    }))
  );

  //saving keys in new variable to render them in specific row
  const firstRow = allKeys.slice(0, 16);
  const secondRow = allKeys.slice(16, 33);
  const thirdRow = allKeys.slice(33, 50);
  const fourthRow = allKeys.slice(50, 63);
  const fifthRow = allKeys.slice(63, 75);
  const lastRow = allKeys.slice(75, 83);
  const navigationKeys = allKeys.slice(83, 87);

  // using useEffect hook to listen for keyup event.
  useEffect(() => {
    const activeKeyhandler = (event) => {
      // prevent default functionality
      event.preventDefault();
      console.log(event.key.toLowerCase());
      const index = allKeys.findIndex(
        (key) => key.keyCode.toLowerCase() === event.key.toLowerCase()
      );
      if (index) {
        // updating 'isPressed' prop of a key that matches
        const updatedKeys = [...allKeys];
        updatedKeys[index].isPressed = true;
        setAllKeys(updatedKeys);
      } else {
        console.log("key not found");
      }
    };
    window.addEventListener("keydown", activeKeyhandler);
    // cleanup function.
    return () => window.removeEventListener("keydown", activeKeyhandler);
  }, []);

  //  background-color for active and non active buttons.
  const activeBtn = "inline-block px-3 py-2 rounded shadow-lg whitespace-nowrap bg-red-500 text-white";
  const nonActiveBtn = darkMode ? "bg-slate-800 text-white" : "inline-block px-3 py-2 bg-white rounded shadow text-sm whitespace-nowrap";

  return (
    <div className="flex w-full max-w-[70%]  max-h-full my-2 p-2 flex flex-col items-center justify-end gap-3">
      {/* first row */}
      <div className="flex gap-2 items-center">
        {firstRow.map((btn, index) => (
          <button
            className={`h-8 p-5 w-10 border rounded-lg shadow-lg text-xs text-center flex content-center items-center 
              ${
                btn.isPressed ? activeBtn : nonActiveBtn
              }
              ${
                index === 13 && 'w-[100px]'
              }
              ${
                index === 14 && 'w-[80px]'
              }
              ${
                index === 15 && 'w-[100px]'
              }
            `}
            key={index}
          >
            {btn.label}
          </button>
        ))}
      </div>
      {/* end of first row */}
      {/* second row */}
      <div className="flex gap-2 items-center">
        {secondRow.map((btn, index) => (
          <button
            key={index}
            className={`h-10 w-11 p-5 border rounded-lg flex items-center justify-center shadow-lg 
            ${
              btn.isPressed ? activeBtn : nonActiveBtn
            }
            ${
              index === 0 && "h-10 w-8  rounded-lg"
            } 
            ${
              index === secondRow.length - 1 && "w-[96px] px-5"
            }
            ${
              index === secondRow.length - 4 && 'w-[100px]'
            }
            `}
          >
            {btn.label}
          </button>
        ))}
      </div>
      {/* end of second row */}
      {/* start of third row */}
      <div className="flex gap-2 items-center">
        {thirdRow.map((btn, index) => (
          <button
            key={index}
            className={`${btn.isPressed ? activeBtn : nonActiveBtn} ${
              index === 0 && "h-10 w-[75px]"
            } h-10 w-11 border rounded-lg flex items-center justify-center shadow-lg 
            ${
              index === thirdRow.length - 1 && "w-[100px]"
            }
            ${
              index === thirdRow.length - 3 && "w-[60px]"
            }
            `}
          >
            {btn.label}
          </button>
        ))}
      </div>
      {/* end of third row */}

      {/* start of 4th row */}

      <div className="flex gap-2 items-center">
        {fourthRow.map((btn, index) => (
          <button
            key={index}
            className={`${
              btn.isPressed ? activeBtn : nonActiveBtn
            } h-10 w-11 border shadow-lg ${
              index === 0 &&
              "w-20 flex rounded-sm items-center justify-center "
            } ${index === fourthRow.length - 1 && "w-24"}`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* end of 4th row  */}
      {/* start of fifth row */}

      <div className="flex gap-2 items-center">
        {fifthRow.map((btn, index) => (
          <button
            className={`${
              btn.isPressed ? activeBtn : nonActiveBtn
            } h-10 border shadow-lg rounded-sm w-11 ${
              (index === fifthRow.length - 1 && "w-28") ||
              (index === 0 && "w-28")
            }`}
            key={index}
          >
            {btn.label}
          </button>
        ))}
      </div>
      {/* end of fifth row */}

      {/* start of last row */}
      <div className="flex gap-2 items-center">
        {lastRow.map((btn, index) => (
          <button
            key={index}
            className={`${
              btn.isPressed ? activeBtn : nonActiveBtn
            } h-10 w-11 rounded-sm flex justify-center shadow-lg items-center border ${
              index === 4 && "w-[315px]"
            }`}
          >
            {btn.label}
          </button>
        ))}

      {/* navigation keys.. */}
      <div className="flex gap-2 items-center">
        <button
          className={`shadow-lg border rounded-sm flex justify-center items-center w-11 h-10 ${
            navigationKeys[0].isPressed ? activeBtn : nonActiveBtn
          }`}
        >
          {navigationKeys[0].label}
        </button>
        <div className="flex flex-col gap-[2px]">
          <button
            className={`h-5 w-16 shadow-lg border rounded-sm flex justify-center items-center ${
              navigationKeys[1].isPressed ? activeBtn : nonActiveBtn
            }`}
          >
            {navigationKeys[1].label}
          </button>
          <button
            className={`h-5 w-16 shadow-lg border rounded-sm flex justify-center items-center ${
              navigationKeys[2].isPressed ? activeBtn : nonActiveBtn
            }`}
          >
            {navigationKeys[2].label}
          </button>
        </div>
        <button
          className={`shadow-lg border rounded-sm flex justify-center items-center w-11 h-10 ${
            navigationKeys[3].isPressed ? activeBtn : nonActiveBtn
          }`}
        >
          {navigationKeys[3].label}
        </button>
      </div>
      {/* end of navigation keys */}
      </div>
      {/* end of last row */}
    </div>
  );
};
export default Keyboard;

// last commit
