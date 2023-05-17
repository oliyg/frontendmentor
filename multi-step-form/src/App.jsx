import { useState } from 'react'
import './App.css'

function App() {
  const curStep = useState(1)

  return (
    <>
      <h1>Step {curStep}</h1>
    </>
  )
}

export default App
