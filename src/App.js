import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from "./Components/Navbar"
import Timer from "./Components/Timer"
import AddTimer from "./Components/AddTimer"
import ManageTimers from "./Components/ManageTimers"
import './App.css';

function App() {
  const data = [
      {
        id: 1,
        name: "Exercise 1",
        seconds: 50
      },
      {
        id: 2,
        name: "Exercise 2",
        seconds: 90
      }
  ]

  const timers = data.map(item => {
    return (
      <Timer 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={ timers } />
          <Route path="manage" element={<ManageTimers timers={data}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
