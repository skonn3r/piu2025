import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Change from './componentes/Change'
import FirtsComponent from './componentes/FirtsComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
      <FirtsComponent/>
    </>
  )
}

export default App
