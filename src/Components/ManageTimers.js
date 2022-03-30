import AddTimer from "./AddTimer"

function ManageTimers(props) {

    const timersList = props.timers.map((timer) => (
        <li key={timer.name}>{timer.name} {timer.seconds}</li>
    ))
    
    return(
        <div>
            <AddTimer />
            <ul>
                {timersList}
            </ul>
        </div>
    )
}

export default ManageTimers