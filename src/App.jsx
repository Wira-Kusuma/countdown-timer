import { useState, useEffect } from "react";
import "./index.css";

export default function App() {
  return (
    <>
      <Main />
      <Footer />
    </>
  );
}

function Main() {
  const [second, setSecond] = useState(41);
  const [minute, setMinute] = useState(55);
  const [hour, setHour] = useState(23);
  const [day, setDay] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecond((prevSecond) => {
        if (prevSecond > 0) {
          return prevSecond - 1;
        } else {
          setMinute((prevMinute) => {
            if (prevMinute > 0) {
              return prevMinute - 1;
            } else {
              setHour((prevHour) => {
                if (prevHour > 0) {
                  return prevHour - 1;
                } else {
                  setDay((prevDay) => {
                    if (prevDay > 0) {
                      return prevDay - 1;
                    }
                    return 0;
                  });
                  return 23;
                }
              });
              return 59;
            }
          });
          return 59;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <p>WE'RE LAUNCHING SOON</p>
      <div className="time">
        {/* String(day) → swich day to string */}
        {/* .padStart(2, '0') → add '0' in front if length <= 1 */}
        <div>
          <p>{String(day).padStart(2, "0")}</p>
          <p>DAYS</p>
        </div>
        <p>:</p>
        <div>
          <p>{String(hour).padStart(2, "0")}</p>
          <p>HOURS</p>
        </div>
        <p>:</p>
        <div>
          <p>{String(minute).padStart(2, "0")}</p>
          <p>MINUTES</p>
        </div>
        <p>:</p>
        <div>
          <p>{String(second).padStart(2, "0")}</p> 
          <p>SECONDS</p>
        </div>
      </div>
    </main>
  );
}

function Footer(){
  return(
    <footer>
      
    </footer>
  )
}