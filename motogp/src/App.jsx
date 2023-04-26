import { useState } from 'react'
import './App.css'
import NextRace from './NextRace'
import RaceDay from './RaceDay'
import Navigat from './Navigat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h1>NEXT RACE:</h1>
    <RaceDay />
    </div>
  )
}
 
export default App
