import { useContext, useEffect } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import HorizontalStatePanel from './components/HorizontalStatePanel'
import { GlobalContext } from './context/GlobalContext'
import FilterHorizontalPanel from './components/FilterHorizontalPanel'
import HorizontalListView from './components/HorizontalListView'
import { ThemeContext } from './context/ThemeContext'
// import ToggleOnIcon from '@mui/icons-material/ToggleOn';
// import ToggleOffIcon from '@mui/icons-material/ToggleOff';

function App() {
  const {main_axis_IsExpandable_init} = useContext(GlobalContext)
  // const {isDark, setIsDark} = useContext(ThemeContext)

  // const toggleTheme = () => setIsDark(!isDark)

  // useEffect(() => {
  //   const app_container = document.querySelector('html')
  //   if(isDark){
  //     app_container.classList.remove('light')
  //     app_container.classList.add('dark')
  //   }
  //   else{
  //     app_container.classList.remove('dark')
  //     app_container.classList.add('light')
  //   }
  // }, [isDark])

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
