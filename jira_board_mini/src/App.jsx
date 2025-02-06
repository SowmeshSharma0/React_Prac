import './App.css'
import AddTask from './components/AddTask'
import HorizontalListView from './components/HorizontalListView'
import HorizontalStatePanel from './components/HorizontalStatePanel'
import { CardProvider } from './context/CardContext'

function App() {
  return (
    <CardProvider>
      <div className="App-container">
        <h1>Ticket Manager Mini</h1>
        {/* can be done better with enum */}
        <HorizontalStatePanel/> 
        {[2, 1, 0].map((state, idx) => <HorizontalListView key={idx} state={state}/>)}
        <AddTask/>
      </div>
    </CardProvider>
  )
}

export default App
