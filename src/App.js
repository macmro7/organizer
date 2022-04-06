import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import Navbar from "./Components/Navbar"
import Timer from "./Components/Timer"
import AddTimer from "./Components/AddTimer"
import ManageTimers from "./Components/ManageTimers"
import './App.css';

const timersInitialState = [
  {
    id: 1,
    name: "Exercise 1",
    seconds: 20,
    minutes: 1,
    isComplete: false,
    currentRep: 0,
    targetRep: 1,
  },
  {
    id: 2,
    name: "Exercise 2",
    seconds: 3,
    minutes: 0,
    isComplete: false,
    currentRep: 0,
    targetRep: 2
  },
  {
    id: 3,
    name: "Exercise 3",
    seconds: 5,
    minutes: 0,
    isComplete: false,
    currentRep: 0,
    targetRep: 1,
  }
]

function App() {
  const [timers, setTimers] = useState(timersInitialState)

  /*function changeCompletion(id) {
    setTimers(prevTimer => (
      [
        ...prevTimer.slice(0,id - 1),
        {
          ...prevTimer[id - 1],
          isComplete: prevTimer[id - 1].currentRep >= prevTimer[id - 1].targetRep - 1 && true,  // it works due to - 1, but i think there's something wrong with useEffect
          currentRep: prevTimer[id - 1].currentRep + 1
        },
        ...prevTimer.slice(id)
    ]))
  }*/

  function changeCompletion(id) {
    const newTimers = timers.map((timer) => ({ ...timer}))
    const timerToUpdateIndex = newTimers.findIndex((timer) => timer.id === id)
    const timerToUpdate = newTimers[timerToUpdateIndex]
    const updatedTimer = {
      ...timerToUpdate,
      currentRep: timerToUpdate.currentRep + 1,
      isComplete: timerToUpdate.currentRep + 1 >= timerToUpdate.targetRep
    }
    newTimers[timerToUpdateIndex] = updatedTimer
    setTimers(newTimers)
  }

  function addTimer(newTimer) {
    setTimers(prevTimer => {
      const nextId = Math.max(...prevTimer.map((timer) => timer.id)) + 1
      return [
        ...prevTimer,
        {
          ...newTimer,
          id: nextId
        }
      ] 
      })
    }
  
  function handleDelete(event) {
    setTimers(prevTimers => prevTimers.filter((timer) => timer.id !== parseInt(event.target.id))) //parse wont be needed after changning types
  }

  const timersList = timers.map(item => {
    return (
      <Timer 
        key={item.id}
        {...item}
        changeCompletion={ changeCompletion }
      />
    )
  }).reverse()


  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={ timersList } />
          <Route 
            path='manage' 
            element={
              <ManageTimers 
                timers={ timers } 
                handleDelete={ handleDelete }
              />}
          />
          <Route path='/add' element={ <AddTimer handleClick={ addTimer } />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
