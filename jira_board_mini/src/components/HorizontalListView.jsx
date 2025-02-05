import { useContext } from "react"
import { StyledHorizontalListView } from "./styles/HorizontalListView.styled"
import TaskList from "./TaskList"
import { GlobalContext } from "../context/GlobalContext"

function HorizontalListView({state}) {

  const {cross_axis_states} = useContext(GlobalContext)
  return (
    <StyledHorizontalListView>
        <h2>{state}</h2>
        <div className="task-list">
            {Array.from({length: 4}).map((_, idx) => 
              <TaskList key={idx} main_state={state} cross_state={cross_axis_states[idx]}/>
            )}
        </div>
    </StyledHorizontalListView>
  )
}

export default HorizontalListView
