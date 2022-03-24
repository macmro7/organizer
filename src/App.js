import logo from './logo.svg';
import Navbar from "./Components/Navbar"
import Timer from "./Components/Timer"
import './App.css';

function App() {
  const data = [
    {
      id: 1,
      seconds: 50
    },
    {
      id: 2,
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
      <Navbar />
      { timers }
    </div>
  );
}

export default App;
