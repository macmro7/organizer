import { Link } from 'react-router-dom';
import trash from "../img/trash.png"

function ManageTimers(props) {

    /*const timersList = props.timers.map((timer) => (
        <li key={timer.id}>{timer.name}
            <button className="delete--button" ><img onClick={ props.handleDelete } id={timer.id} src= { trash } /></button>
        </li>
    )).reverse()*/

    /*const timersList = props.timers.map((timer) => (
        <ul>
            <li>
                {timer.name}
            </li>
            <li>
                {timer.seconds}
            </li>
            <li>
                <button className="delete--button" ><img onClick={ props.handleDelete } id={timer.id} src= { trash } /></button>
            </li>
        </ul>
    )).reverse()*/
    
    // return(
    //     <div>
    //         <AddTimer handleClick={props.handleClick} />
    //         <div className="timers--background">
    //             <ul className="timers--list">
    //                 { timersList }
    //             </ul>
    //         </div> 
    //     </div>
    // )


    const timersList = props.timers.map((timer) => (
        <tr key={ timer.id }>
            <td>{ timer.name }</td>
            <td>{ timer.minutes < 10 ? '0' + timer.minutes : timer.minutes } : { timer.seconds < 10 ? '0' + timer.seconds : timer.seconds }</td>
            <td>{ timer.targetRep }</td>
            <td><button className="delete--button" ><img onClick={ props.handleDelete } alt="delete" id={timer.id} src= { trash } /></button></td>
        </tr>
    )).reverse()

    // <AddTimer handleClick={props.handleClick} />
    return(
        <div>
            <table className="timers--table">
                <thead>
                    <tr className="timers--table--headers">
                        <td>Name</td>
                        <td>Time</td>
                        <td>Rep.</td>
                    </tr>
                </thead>
                <tbody>
                    { timersList }
                </tbody>
            </table>
            <Link className="link" to="/add"><button className="add--timer--button">Add timer</button></Link>
        </div>
    )
}

export default ManageTimers