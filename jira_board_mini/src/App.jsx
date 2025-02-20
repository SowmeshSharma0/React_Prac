import { useContext } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import HorizontalStatePanel from './components/HorizontalStatePanel'
import { CardProvider } from './context/CardContext'
import { GlobalContext } from './context/GlobalContext'
import FilterHorizontalPanel from './components/FilterHorizontalPanel'
import HorizontalListView from './components/HorizontalListView'

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
            // return main_axis_IsExpandable_init[state] ? <HorizontalListViewExpandable key={idx} state={state}/> : <HorizontalListView_NonExpandable key={idx} state={state}/>
            return main_axis_IsExpandable_init[state] ? 
              <HorizontalListView key={idx} state={state} isExpandable={true}/> 
              : <HorizontalListView key={idx} state={state} isExpandable={false}/>
        })}
        </div>
        <AddTask/>
      </div>
    </CardProvider>
  )
}

export default App
