import { FilterInfoContainer } from './styles/FilterInfo.styled'
import { useClickOutside } from "../hooks/useClickOutside";

const FilterInfo = ({isOpen, setIsOpen}) => {

    const wrapperRef = useClickOutside(() => setIsOpen(false))
    return (
        <FilterInfoContainer open={isOpen} onCancel={() => setIsOpen(false)}>
            <div className="content-wrapper" ref={wrapperRef}>
                <p>This is the Quick Filter Panel</p>
                <p>Filtering is based on Assignee</p>
                <p>Click on any of the filter buttons to toggle the filter</p>
            </div>
        </FilterInfoContainer>
    )
}

export default FilterInfo
