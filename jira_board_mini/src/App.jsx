import { useContext} from 'react'
import './App.css'
import AddTask from './components/AddTask'
import HorizontalStatePanel from './components/HorizontalStatePanel'
import { GlobalContext } from './context/GlobalContext'
import FilterHorizontalPanel from './components/FilterHorizontalPanel'
import HorizontalListView from './components/HorizontalListView'
// import useTheme from './components/useTheme'
// import ToggleOnIcon from '@mui/icons-material/ToggleOn';
// import ToggleOffIcon from '@mui/icons-material/ToggleOff';


function App() {
  const {main_axis_IsExpandable_init} = useContext(GlobalContext)

  // const {isDark, toggleTheme} = useTheme()

  return (
      <div className="App-container">
        <div className="header">
          <h1>Ticket Manager Mini</h1>
          {/* {isDark ? 
            <ToggleOnIcon onClick={toggleTheme} className='toggle-on'/> 
            : <ToggleOffIcon onClick={toggleTheme} className='toggle-off'/>
          } */}
        </div>
        <FilterHorizontalPanel/>
        <div className="horizontal-scroll_wrapper">
          <HorizontalStatePanel/> 
          {/* maintain insertion order */}
          {Array.from(Object.keys(main_axis_IsExpandable_init)).reverse().map((state) => {
            state = parseInt(state)
            const key_main_axis_state = crypto.randomUUID()
            return <HorizontalListView key={key_main_axis_state} state={state} isExpandable={main_axis_IsExpandable_init[state] }/>
          })}
        </div>
        <AddTask/>
      </div>
  )
}

export default App
