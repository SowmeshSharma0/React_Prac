import CardPanel from '../CardPanel'
import './App.css'
import ToggleThemeBtn from './components/ToggleThemeBtn'
import { useState } from 'react'
import { ThemeProvider } from './contexts/theme'

function App() {
  const [Dark, setDark] = useState(false)
  const handleToggle = () => {
    setDark(!Dark)
  }

  return (
    <ThemeProvider value={{dark: Dark, toggle: handleToggle}}>
      <ToggleThemeBtn/>
      <CardPanel/>
    </ThemeProvider>
  )
}

export default App
