import { useEffect, useState } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(72);
    const [isActive, setIsActive] = useState(false)

    let year = new Date().getFullYear()
    console.log("tutaj")
    console.log(year)

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
        let minutes = 0
        if( seconds > 60) {
            minutes = seconds / 60
        }
        console.log(minutes)
    }

    return (
        <div className="timer"> 
            <div className="circle">
                <h1 className="circle--timer">{seconds > 59 ? `${Math.floor(seconds / 60)} - ${seconds - 60}` : `00 : ${seconds}` }</h1>
            <button onClick={startTimer}>{isActive ? "Stop" : "Start"}</button>
            </div>
            <input onChange={e => setSeconds(e.target.value)}></input>
        </div>
    )
}

export default Timer;