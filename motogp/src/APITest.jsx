import axios from 'axios'
import { useState } from 'react'

export default function APITest()
{
    const [race , setRace] = useState('RACE') // [state, setState
    const [date , setDate] = useState('DATE') // [state, setState
    return (    
        <div className="APITest">
            <h1>{race}</h1>
            <h1>{date}</h1>
            <button onClick={() => axios.get('/api/schedule').then(result => setRace(result.data.stages[1].venue.name))}>Next Race</button>
            <button onClick={() => axios.get('/api/schedule').then(result => setDate(result.data.stages[1].scheduled_end))}>Next Date</button>
        </div>
    )
}