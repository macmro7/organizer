import { useEffect, useState } from "react";

import playSvg from '../img/play.svg'
import pauseSvg from '../img/pause.svg'

function Timer(props) {
    const { seconds, minutes, changeCompletion, id, name, isComplete, currentRep, targetRep } = props
    const [timerSeconds, setTimerSeconds] = useState(parseInt(seconds) + parseInt(minutes) * 60)
    const [isActive, setIsActive] = useState(false)

    function startTimer() {
        setIsActive(prevIsActive => !prevIsActive)
    }

    useEffect(() => {
        let interval

        if (isActive) {
            if (timerSeconds === 0) {
                setIsActive(false)
                changeCompletion(id)
                setTimerSeconds(parseInt(seconds) + parseInt(minutes) * 60)
            }
            interval = setInterval(() => {
                setTimerSeconds(prevTimerSeconds => prevTimerSeconds - 1);
            }, 1000);

        }

        
        return () => clearInterval(interval);
    }, [isActive, changeCompletion, id, minutes, seconds, timerSeconds]); // can be improved with custom hooks

    function showTime() { 
        const minutes = Math.floor(timerSeconds / 60)
        const secondsLeft = timerSeconds - 60 * minutes

        return `${minutes < 10 ? '0' + minutes : minutes} : 
                ${secondsLeft < 10 ? '0' + secondsLeft : secondsLeft}` 
    }

    return (
        <div className="timer"> 
            <label>{ name }</label>
            <div className={`circle ${isComplete ? 'timer--completed' : 'timer--not--completed'}`}>
                <h1 className="circle--timer">{showTime()}</h1>
                <button onClick={startTimer}>
                    {isActive ? 
                        <img className="icon--pause" src={ pauseSvg } alt="pause"/> :
                        <img className="icon--play" src={ playSvg } alt="play"/> } 
                </button>
                <h1>{ currentRep } / { targetRep }</h1>
            </div>
        </div>
    )
}

export default Timer