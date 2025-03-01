import { FilterInfoContainer } from './styles/FilterInfo.styled'
import { useEffect, useRef, useCallback } from 'react'
const FilterInfo = ({isOpen, setIsOpen}) => {

    const ref = useRef();

    // const handleClickOutside =  useCallback((e) => {
    //     if (ref.current && !ref.current.contains(e.target)) {
    //         setIsOpen(false);
    //     }
    // }, [ref, setIsOpen]);

    // useEffect(() => {
    //     if(isOpen){
    //         // ref.current?.showModal();
    //         document.addEventListener("mouseenter", handleClickOutside);
    //     }
    //     else{
    //         // ref.current?.close();
    //         document.removeEventListener("mouseenter", handleClickOutside);
    //     }

    //     return () => {
    //         document.removeEventListener("mouseenter", handleClickOutside);
    //     }
    // }, [isOpen, handleClickOutside])

    return (
        <FilterInfoContainer ref={ref} open={isOpen} onCancel={() => setIsOpen(false)}>
            {/* <button onClick={() => setIsOpen(false)}>X</button> */}
            <p>This is the Quick Filter Panel</p>
            <p>Filtering is based on Assignee</p>
            <p>Click on any of the filter buttons to toggle the filter</p>
        </FilterInfoContainer>
    )
}

export default FilterInfo
