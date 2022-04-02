import AddTimer from "./AddTimer"
import trash from "../img/trash.png"

function ManageTimers(props) {

    const timersList = props.timers.map((timer) => (
        <li key={timer.id}>{timer.name} {timer.seconds} 
            <button className="delete--button" ><img onClick={ props.handleDelete } id={timer.id} src= { trash } /></button>
        </li>
    )).reverse()
    
    return(
        <div>
            <AddTimer handleClick={props.handleClick} />
            <div className="timers--background">
                <ul className="timers--list">
                    { timersList }
                </ul>
            </div>
        </div>
    )
}

export default ManageTimers