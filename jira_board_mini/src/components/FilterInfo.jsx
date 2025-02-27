import { FilterInfoContainer } from './styles/FilterInfo.styled'
import { useEffect, useRef, useCallback } from 'react'
const FilterInfo = ({isOpen, setIsOpen}) => {

    const ref = useRef();

    const handleClickOutside =  useCallback((e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setIsOpen(false);
        }
    }, [ref, setIsOpen]);

    useEffect(() => {
        if(isOpen){
            document.addEventListener("mousedown", handleClickOutside);
        }
        else{
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [isOpen, handleClickOutside])

    return (
        <FilterInfoContainer ref={ref} open={isOpen} onClose={() => setIsOpen(false)}>
            {/* <button onClick={() => setIsOpen(false)}>X</button> */}
            <p>This is the Quick Filter Panel</p>
            <p>Filtering is based on Assignee</p>
            <p>Click on any of the filter buttons to toggle the filter</p>
        </FilterInfoContainer>
    )
}

export default FilterInfo
