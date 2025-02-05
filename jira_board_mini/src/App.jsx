import { useContext } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import HorizontalListView from './components/HorizontalListView'
import HorizontalStatePanel from './components/HorizontalStatePanel'
import { CardProvider } from './context/CardContext'
import { GlobalContext, GlobalProvider } from './context/GlobalContext'

function App() {

  const {main_axis_states} = useContext(GlobalContext)
  return (
    <CardProvider>
      <div className="App-container">
        <h1>Ticket Manager Mini</h1>
        {/* can be done better with enum */}
        <HorizontalStatePanel/> 
        {main_axis_states.map((state, idx) => <HorizontalListView key={idx} state={state}/>)}
        <AddTask/>
      </div>
    </CardProvider>
  )
}

export default App
