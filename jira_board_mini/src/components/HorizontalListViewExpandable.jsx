import { useContext, useState } from "react"
import TaskList from "./TaskList"
import { GlobalContext } from "../context/GlobalContext"
import { StyledHorizontalListViewExpandable } from "./styles/HorizontalListViewExpandable.styled"

function HorizontalListViewExpandable({state}) {

  const {main_axis_state_mapping} = useContext(GlobalContext)

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }
  
  return (
    <StyledHorizontalListViewExpandable>
      <div className="section-header">
        <h2>{main_axis_state_mapping[state]}</h2>
        <button onClick={toggleExpand}>&#x25BC;</button>
      </div>
      {isExpanded && <div className="task-list">
            {Array.from({length: 4}).map((_, idx) => 
              <TaskList key={idx} main_state={state} cross_state={idx}/>
            )}
        </div>}
    </StyledHorizontalListViewExpandable>
  )
}

export default HorizontalListViewExpandable
