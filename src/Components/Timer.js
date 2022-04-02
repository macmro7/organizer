import { useEffect, useState } from "react";

function Timer(props) {
    const [seconds, setSeconds] = useState(props.seconds);
    const [isActive, setIsActive] = useState(false)

    function startTimer() {
        setIsActive(prevIsActive => !prevIsActive)
    }

    useEffect(() => {
        let interval
        
        if (seconds === 0) {    // nie jestem pewien, czy to powinno byc wewnatrz useEffect
            setIsActive(false)
        }

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        }

        
        return () => clearInterval(interval);
    });

    function showTime() {   // oblicza ile minut i sekund wyswietlic
        const minutes = Math.floor(seconds / 60)
        const secondsLeft = seconds - 60 * minutes

        return `${minutes < 10 ? '0' + minutes : minutes} : 
                ${secondsLeft < 10 ? '0' + secondsLeft : secondsLeft}` 
    }

    return (
        <div className="timer"> 
            <label>{ props.name }</label>
            <div className="circle">
                <h1 className="circle--timer">{showTime()}</h1>
            <button onClick={startTimer}>{isActive ? "Stop" : "Start"}</button>
            </div>
        </div>
    )
}

export default Timer;