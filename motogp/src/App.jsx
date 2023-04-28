import { useState } from 'react'
import './App.css'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import RaceDay from './RaceDay'
import { Hidden } from '@mui/material';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Card variant="outlined"
        style={{
          boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
          backgroundColor: "#f2f2f2",
        }}>
        <Box sx={{ 
          width: 700
          }}>
          <h1>NEXT RACE:</h1>
          <center><RaceDay /></center>
        </Box>
      </Card>
    </div>
  )
}

export default App
