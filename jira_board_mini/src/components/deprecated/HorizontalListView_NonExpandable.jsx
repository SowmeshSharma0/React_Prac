
import { useContext } from 'react'
import { StyledHorizontalListView_NonExpandable } from '../styles/HorizontalListView_NonExpandable.styled'
import TaskList from '../TaskList'
import { GlobalContext } from '../../context/GlobalContext'
// import HorizontalStatePanel from './HorizontalStatePanel'

const HorizontalListView_NonExpandable = ({state}) => {

  const {main_axis_state_mapping} = useContext(GlobalContext)

  return (
    <StyledHorizontalListView_NonExpandable>
        <h2>{main_axis_state_mapping[state]}</h2>
        <div className="task-list-wrapper">
          {/* <HorizontalStatePanel/> */}
          <div className="task-list">
              {Array.from({length: 4}).map((_, idx) => 
                <TaskList key={idx} main_state={state} cross_state={idx}/>
              )}
          </div>
        </div>
    </StyledHorizontalListView_NonExpandable>
  )
}

export default HorizontalListView_NonExpandable
