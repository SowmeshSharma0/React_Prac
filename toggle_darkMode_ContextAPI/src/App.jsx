import CardPanel from '../CardPanel'
import './App.css'
import ToggleThemeBtn from './components/ToggleThemeBtn'
import { useState } from 'react'

function App() {
  const [Dark, setDark] = useState(false)
  const handleToggle = () => {
    console.log('Dark:', Dark)
    setDark(!Dark)
  }

  return (
    <>
      <ToggleThemeBtn handleToggle={handleToggle} Dark={Dark}/>
      <CardPanel Dark={Dark}/>
    </>
  )
}

export default App
