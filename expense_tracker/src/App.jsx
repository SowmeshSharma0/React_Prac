import './App.css'
import Container from './components/Container'
import { GlobalProvider } from './context/GlobalContext'

function App() {
  return (
    <GlobalProvider>
      <Container/>
    </GlobalProvider>
  )
}

export default App
