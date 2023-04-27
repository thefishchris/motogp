import { useState } from 'react'
import './App.css'
import Card from '@mui/material/Card';
import RaceDay from './RaceDay'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Card variant="outlined"
        style={{
          boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
          backgroundColor: "#f2f2f2",
        }}>
        <h1>NEXT RACE:</h1>
        <RaceDay />
      </Card>
    </div>
  )
}

export default App
