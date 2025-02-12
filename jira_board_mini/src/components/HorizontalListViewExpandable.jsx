import { useContext, useState } from "react"
import TaskList from "./TaskList"
import { GlobalContext } from "../context/GlobalContext"
import { StyledHorizontalListViewExpandable } from "./styles/HorizontalListViewExpandable.styled"
// import HorizontalStatePanel from "./HorizontalStatePanel"

function HorizontalListViewExpandable({state}) {

  const {main_axis_state_mapping, usable_card_width, usable_card_height} = useContext(GlobalContext)

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }
  
  return (
    <StyledHorizontalListViewExpandable expanded={isExpanded} usable_card_width={usable_card_width} usable_card_height={usable_card_height}>
      <div className="section-header">
        <h2>{main_axis_state_mapping[state]}</h2>
        <button onClick={toggleExpand}>&#x25BC;</button>
      </div>
      <div className="task-list-wrapper">
        {/* <HorizontalStatePanel/> */}
        <div className="task-list">
              {/* <HorizontalStatePanel/> */}
              {Array.from({length: 4}).map((_, idx) => 
                <TaskList key={idx} main_state={state} cross_state={idx}/>
              )}
        </div>
      </div>
    </StyledHorizontalListViewExpandable>
  )
}

export default HorizontalListViewExpandable
