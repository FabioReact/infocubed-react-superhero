import Heroes from './pages/Heroes'
import { useState } from 'react'

function App() {
  const [showHeroes, setshowHeroes] = useState(true)
  return (
    <>
      <h1>SuperHero App</h1>
      <button onClick={() => setshowHeroes(b => !b)}>Show/Hide Heroes Page</button>
      {showHeroes && <Heroes />}
    </>
  )
}

export default App
