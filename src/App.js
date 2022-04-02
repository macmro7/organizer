import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react'

import Navbar from "./Components/Navbar"
import Timer from "./Components/Timer"
import AddTimer from "./Components/AddTimer"
import ManageTimers from "./Components/ManageTimers"
import './App.css';

function App() {
  const [timers, setTimers] = useState([
      {
        id: 1,
        name: "Exercise 1",
        seconds: 50,
      },
      {
        id: 2,
        name: "Exercise 2",
        seconds: 90
      }
  ])
  
  const timersList = timers.map(item => {
    return (
      <Timer 
        key={item.id}
        {...item}
      />
    )
  }).reverse()

  function handleClick(newTimer) {
    setTimers(prevTimer => ([
      ...prevTimer,
      {
        ...newTimer,
        id: prevTimer.length + 1
      }
    ]))
  }

  function handleDelete(event) {
    setTimers(prevTimers => prevTimers.filter(prevTimers => prevTimers.id != event.target.id))
}

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={ timersList } />
          <Route 
            path="manage" 
            element={
              <ManageTimers 
                timers={ timers } 
                handleClick={ handleClick } 
                handleDelete={ handleDelete }
              />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
