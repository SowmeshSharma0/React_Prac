import { useContext } from "react"
import { CardContext } from "../context/CardContext"
import { StyledFilterHorizontalPanel } from "./styles/FilterHorizontalPanel.styled"

const FilterHorizontalPanel = () => {

    const {Assignees, toggleAssigneeFilter} = useContext(CardContext)
    return (
        <StyledFilterHorizontalPanel len={Assignees.size}>
            {Array.from(Assignees).map((assignee, idx) => {
                return (
                    <div key={idx} className="filter-checkbox">
                        {/* <p>{assignee.assignee}</p> */}
                        <label htmlFor={assignee.assignee}>{assignee.assignee}</label>
                        <input 
                            type="checkbox" 
                            id={assignee.assignee} 
                            name={assignee.assignee} 
                            value={assignee.assignee}
                            onChange={() => {
                                toggleAssigneeFilter(assignee)
                                console.log("Toggled: ", assignee)
                            }}
                            defaultValue={assignee.isFilterActive}
                            checked={assignee.isFilterActive}
                        />
                    </div>
                )
            })}
        </StyledFilterHorizontalPanel>
    )
}

export default FilterHorizontalPanel
