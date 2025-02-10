import { useContext } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import HorizontalListViewExpandable from './components/HorizontalListViewExpandable'
// import HorizontalStatePanel from './components/HorizontalStatePanel'
import { CardProvider } from './context/CardContext'
import { GlobalContext } from './context/GlobalContext'
import HorizontalListView_NonExpandable from './components/HorizontalListView_NonExpandable'

function App() {
  const {main_axis_IsExpandable_init} = useContext(GlobalContext)
  return (
    <CardProvider>
      <div className="App-container">
        <h1>Ticket Manager Mini</h1>
        {/* can be done better with enum */}
        {/* <HorizontalStatePanel/>  */}
        {[2, 1, 0].map((state, idx) => {
          return main_axis_IsExpandable_init[state] ? <HorizontalListViewExpandable key={idx} state={state}/> : <HorizontalListView_NonExpandable key={idx} state={state}/>
      })}
        <AddTask/>
      </div>
    </CardProvider>
  )
}

export default App
