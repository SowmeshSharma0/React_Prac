import { useContext } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import HorizontalListViewExpandable from './components/HorizontalListViewExpandable'
import HorizontalStatePanel from './components/HorizontalStatePanel'
import { CardProvider } from './context/CardContext'
import { GlobalContext } from './context/GlobalContext'
import HorizontalListView_NonExpandable from './components/HorizontalListView_NonExpandable'
import FilterHorizontalPanel from './components/FilterHorizontalPanel'

function App() {
  const {main_axis_IsExpandable_init} = useContext(GlobalContext)
  return (
    <CardProvider>
      <div className="App-container">
        <h1>Ticket Manager Mini</h1>
        <FilterHorizontalPanel/>
        {/* can be done better with enum */}
        <div className="horizontal-scroll_wrapper">
          <HorizontalStatePanel/> 
          {[2, 1, 0].map((state, idx) => {
            return main_axis_IsExpandable_init[state] ? <HorizontalListViewExpandable key={idx} state={state}/> : <HorizontalListView_NonExpandable key={idx} state={state}/>
        })}
        </div>
        <AddTask/>
      </div>
    </CardProvider>
  )
}

export default App
