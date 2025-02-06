import { useContext, useState } from "react"
import { StyledHorizontalListView } from "./styles/HorizontalListView.styled"
import TaskList from "./TaskList"
import { GlobalContext } from "../context/GlobalContext"

function HorizontalListView({state}) {

  const {main_axis_state_mapping, main_axis_expanded_init} = useContext(GlobalContext)

  const [isExpanded, setIsExpanded] = useState(main_axis_expanded_init[state])

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }
  
  return (
    <StyledHorizontalListView>
      <div className="section-header">
        <h2>{main_axis_state_mapping[state]}</h2>
        <button onClick={toggleExpand}>&#x25BC;</button>
      </div>
      {isExpanded && <div className="task-list">
            {Array.from({length: 4}).map((_, idx) => 
              <TaskList key={idx} main_state={state} cross_state={idx}/>
            )}
        </div>}
    </StyledHorizontalListView>
  )
}

export default HorizontalListView
