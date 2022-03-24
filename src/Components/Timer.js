import { useEffect, useState } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(130);
    const [isActive, setIsActive] = useState(false)

    function startTimer() {
        setIsActive(prevIsActive => !prevIsActive)
        console.log(isActive)
    }

    useEffect(() => {
        let interval

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        }
        
        return () => clearInterval(interval);
    });

    function showTime() { 
        const minutes = Math.floor(seconds / 60)
        const secondsLeft = seconds - 60 * minutes

        /*if (seconds > 59) {

            return `${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds - 60 * minutes : seconds - 60 * minutes}` 
        } 
        else {
            return `00 : ${seconds}`
        }*/

        return `${minutes < 10 ? '0' + minutes : minutes} : ${secondsLeft < 10 ? '0' + secondsLeft : secondsLeft}` 
    }

    return (
        <div className="timer"> 
            <div className="circle">
                <h1 className="circle--timer">{showTime()}</h1>
            <button onClick={startTimer}>{isActive ? "Stop" : "Start"}</button>
            </div>
            <input onChange={e => setSeconds(e.target.value)}></input>
        </div>
    )
}

export default Timer;