import { useContext, useState } from "react"
import { CardContext } from "../context/CardContext"
import { StyledFilterBox, StyledFilterHorizontalPanel, StyledFilterPanelContainer } from "./styles/FilterHorizontalPanel.styled"
import FilterInfo from "./FilterInfo"

const FilterHorizontalPanel = () => {

    const {Assignees, toggleAssigneeFilter} = useContext(CardContext)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <StyledFilterPanelContainer>
            <h2 onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>Quick Filters :</h2>
            {/* <h2 onClick={() => setIsOpen(!isOpen)}>Quick Filters :</h2> */}
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
            <FilterInfo isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    )
}

export default FilterHorizontalPanel
