import { FilterInfoContainer } from './styles/FilterInfo.styled'
const FilterInfo = ({isOpen, setIsOpen}) => {

    return (
        <FilterInfoContainer open={isOpen} onCancel={() => setIsOpen(false)}>
            {/* <button onClick={() => setIsOpen(false)}>X</button> */}
            <p>This is the Quick Filter Panel</p>
            <p>Filtering is based on Assignee</p>
            <p>Click on any of the filter buttons to toggle the filter</p>
        </FilterInfoContainer>
    )
}

export default FilterInfo
