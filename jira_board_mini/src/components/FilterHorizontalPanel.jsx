import { useContext } from "react"
import { CardContext } from "../context/CardContext"
import { StyledFilterBox, StyledFilterHorizontalPanel, StyledFilterPanelContainer } from "./styles/FilterHorizontalPanel.styled"
import FilterInfo from "./FilterInfo"
import { useToggle } from "../hooks/useToggle"

const FilterHorizontalPanel = () => {

    const {Assignees, toggleAssigneeFilter} = useContext(CardContext)
    const [isOpen, toggleOpen] = useToggle(false)
    return (
        <>
            <StyledFilterPanelContainer>
            <h2 onMouseEnter={() => toggleOpen(true)} onMouseLeave={() => toggleOpen(false)} onClick={() => toggleOpen(true)}>Quick Filters :</h2>
            {/* <h2 onClick={() => setIsOpen(!isOpen)}>Quick Filters :</h2> */}
            {Assignees && <StyledFilterHorizontalPanel len={Assignees.size}>
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
                </StyledFilterHorizontalPanel>}
            </StyledFilterPanelContainer>
            <FilterInfo isOpen={isOpen} closeModal={() => setIsOpen(false)}/>
        </>
    )
}

export default FilterHorizontalPanel
