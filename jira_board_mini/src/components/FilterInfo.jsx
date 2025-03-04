import { FilterInfoContainer } from './styles/FilterInfo.styled'
import { useClickOutside } from "../hooks/useClickOutside";
import GenericDialog from './GenericDialog';

const FilterInfo = ({isOpen, closeModal}) => {

    const wrapperRef = useClickOutside(closeModal)
    return (
        <GenericDialog openModal={isOpen} closeModal={closeModal} Component={FilterInfoContainer} open={isOpen}>
            <div className="content-wrapper" ref={wrapperRef}>
                <p>This is the Quick Filter Panel</p>
                <p>Filtering is based on Assignee</p>
                <p>Click on any of the filter buttons to toggle the filter</p>
            </div>
        </GenericDialog>
    )
}

export default FilterInfo
