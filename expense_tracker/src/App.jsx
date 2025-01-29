import './App.css'
import Container from './components/Container'
import { ListProvider } from './context/GlobalContext'

function App() {
  return (
    <ListProvider>
      <Container/>
    </ListProvider>
  )
}

export default App
