import { useState } from "react";
import  "./countdowntimer.css"
const CountDownTimer = () => {
  const [minute, setMinute] = useState(0);
  const [remainingTimeInSec, setRemainingTimeInSec] = useState(0);

  const onChange = (e) => {
    console.log(e);
    setMinute(e.target.value);
  };

  const manageTimer = () => {
    if (remainingTimeInSec === 0) {
      // Set Initial Timer Value
      setRemainingTimeInSec(minute * 60);

      const timer = setInterval(() => {
        setRemainingTimeInSec((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            clearInterval(timer); //  this is not a problem
            return 0;
          }
        });
      }, 1000);
    }
  };

  return (
    <div className="max-w-[450px] border rounded-sm mx-auto p-4 m-8">
      <div className="flex inputbuttonContainer">
        <input
          type="number"
          name="minuts"
          value={minute}
          className="p-4 rounded-sm border flex-1 input"
          onChange={onChange}
        />
        <button 
          type="button"
          className="py-4 px-8 rounded-sm bg-green-500 text-white ml-2 flex-1 button"
          onClick={manageTimer}
          style={{backgroundColor:'green'}}
        >
          Start
        </button>
      </div>
      <div className="text-3xl font-bold text-center mt-12 mb-8">
        {Math.floor(remainingTimeInSec / 60)} : {remainingTimeInSec % 60}
      </div>
    </div>
  );
};

export default CountDownTimer;
 