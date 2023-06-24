import { useState } from 'react'
import './App.css'
import ScoreKeeper from './modules/ScoreKeeper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ScoreKeeper numPlayers={10} target={3}/>
      </div>
    </>
  )
}

export default App
