import AddTimer from "./AddTimer"

function ManageTimers(props) {

    const timersList = props.timers.map((timer) => (
        <li key={timer.id}>{timer.name} {timer.seconds}</li>
    ))
    
    return(
        <div>
            <AddTimer handleClick={props.handleClick} />
            <div className="timers--background">
                <ul className="timers--list">
                    {timersList}
                </ul>
            </div>
        </div>
    )
}

export default ManageTimers