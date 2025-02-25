import { useContext } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import HorizontalStatePanel from './components/HorizontalStatePanel'
import { GlobalContext } from './context/GlobalContext'
import FilterHorizontalPanel from './components/FilterHorizontalPanel'
import HorizontalListView from './components/HorizontalListView'

function App() {
  const {main_axis_IsExpandable_init} = useContext(GlobalContext)

  return (
      <div className="App-container">
        <h1>Ticket Manager Mini</h1>
        <FilterHorizontalPanel/>
        <div className="horizontal-scroll_wrapper">
          <HorizontalStatePanel/> 
          {Array.from(Object.keys(main_axis_IsExpandable_init).reverse()).map((state, idx) => {
            state = parseInt(state)
            return main_axis_IsExpandable_init[state] ? 
              <HorizontalListView key={idx} state={state} isExpandable={true}/> 
              : <HorizontalListView key={idx} state={state} isExpandable={false}/>
          })}
        </div>
        <AddTask/>
      </div>
  )
}

export default App
