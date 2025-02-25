import { useContext } from "react"
import { CardContext } from "../context/CardContext"
import { StyledFilterBox, StyledFilterHorizontalPanel, StyledFilterPanelContainer } from "./styles/FilterHorizontalPanel.styled"

const FilterHorizontalPanel = () => {

    const {Assignees, toggleAssigneeFilter} = useContext(CardContext)
    return (
        <StyledFilterPanelContainer>
            <h2>Quick Filters :</h2>
            <StyledFilterHorizontalPanel len={Assignees.size}>
                {Object.entries(Assignees).map(([key, value], idx) => {
                    return (
                    <StyledFilterBox 
                        key={idx} 
                        isToggleActive={value.isFilterActive}
                        onClick={() => {
                            toggleAssigneeFilter(key)
                        }}
                    >
                        <p>{key}</p>
                    </StyledFilterBox>
                )
            })}
            </StyledFilterHorizontalPanel>
        </StyledFilterPanelContainer>
    )
}

export default FilterHorizontalPanel
