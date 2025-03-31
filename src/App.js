import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    let intervalID;

    if (flag) {
      intervalID = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalID);
    }

    return () => clearInterval(intervalID);
  }, [flag]);

  const startStop = (e) => {
    setFlag((prev) => !prev);
  }

  const reset = () => {
    setFlag(false);
    setTime(0);
  }

  const formatTime = (sec) => {
    const minute = Math.floor(sec / 60);
    const remainingSeconds = sec % 60;
    return `${minute}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(time)}</p>
      <div>
        <button onClick={startStop}>{!flag ? 'Start' : 'Stop'}</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
