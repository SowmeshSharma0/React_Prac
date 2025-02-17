import { useContext } from "react"
import { CardContext } from "../context/CardContext"
import { StyledFilterBox, StyledFilterHorizontalPanel } from "./styles/FilterHorizontalPanel.styled"
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

const FilterHorizontalPanel = () => {

    const {Assignees, toggleAssigneeFilter} = useContext(CardContext)
    // console.log("Assignees: ", Assignees)
    return (
        <StyledFilterHorizontalPanel len={Assignees.size}>
            {Object.entries(Assignees).map(([key, value], idx) => {
                return (
                    <StyledFilterBox 
                        key={idx} 
                        isToggleActive={value.isFilterActive}
                        onClick={() => {
                            toggleAssigneeFilter(key)
                            // console.log("Toggled: ", assignee)
                        }}
                    >
                        <p>{key}</p>
                        {value.isFilterActive ? <ToggleOnIcon id="toggle-on"/> : <ToggleOffIcon id="toggle-off"/>}
                        {/* <label htmlFor={assignee.assignee}>{assignee.assignee}</label>
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
                        /> */}
                    </StyledFilterBox>
                )
            })}
        </StyledFilterHorizontalPanel>
    )
}

export default FilterHorizontalPanel
