import AddTimer from "./AddTimer"

function ManageTimers(props) {

    const timersList = props.timers.map((timer) => (
        <li key={timer.id}>{timer.name} {timer.seconds}</li>
    ))
    
    return(
        <div>
            <AddTimer handleClick={props.handleClick} />
            <ul>
                {timersList}
            </ul>
        </div>
    )
}

export default ManageTimers