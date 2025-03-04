import { useEffect } from "react";
import { useState } from "react";

export const useAssignee = (initialAssignees = {}) => {
    const [Assignees, setAssignees] = useState(() => {

        if(initialAssignees.length > 0){
            return initialAssignees
        }
        const savedAssignees = localStorage.getItem('assignees')
        return savedAssignees ? JSON.parse(savedAssignees) : null
    });
    
    const [areFiltersActive, setAreFiltersActive] = useState(() => {
        const savedAssignees = localStorage.getItem('assignees');
        if (!savedAssignees) return false;
        
        const parsedAssignees = JSON.parse(savedAssignees);
        return Object.values(parsedAssignees).some(assignee => assignee.isFilterActive);
    });

    useEffect(() => {
        if(Assignees === null)
            return
        localStorage.setItem('assignees', JSON.stringify(Assignees))
    }, [Assignees])

    const addAssignee = (assignee) => {
        setAssignees(prevAssignees => {
            if (prevAssignees === null) {
                // console.log('prevAssignees is null')
                return {
                    [assignee]: {
                        count: 1,
                        isFilterActive: false
                    }
                }
            }
            else if (assignee in prevAssignees) {
                return {
                    ...prevAssignees,
                    [assignee]: {
                        count: prevAssignees[assignee].count + 1,
                        isFilterActive: prevAssignees[assignee].isFilterActive
                    }
                }
            }
            else{
                return {
                    ...prevAssignees,
                    [assignee]: {
                        count: 1,
                        isFilterActive: false
                    }
                }
            }
        })
    }

    const removeAssignee = (assignee) => {
        setAssignees(prevAssignees => {
            if(!prevAssignees[assignee]){
                return prevAssignees
            }

            if (prevAssignees[assignee].count === 1) {
                const newAssignees = { ...prevAssignees }
                delete newAssignees[assignee]
                return newAssignees
            }
            return {
                ...prevAssignees,
                [assignee]: {
                    count: prevAssignees[assignee].count - 1,
                    isFilterActive: prevAssignees[assignee].isFilterActive
                }
            }
        })
    }

    const toggleAssigneeFilter = (toggleAssignee) => {

        if(Assignees[toggleAssignee].isFilterActive === false){
            setAreFiltersActive(true)
        }
        else{
            //basically u are toggling toggleAssignee off; check if all other filters are off as well
            let allFiltersOff = true
            Object.keys(Assignees).forEach(assigneeKey => {
                if(assigneeKey !== toggleAssignee && Assignees[assigneeKey].isFilterActive === true){
                    allFiltersOff = false
                    return
                }
            })
            if(allFiltersOff){
                setAreFiltersActive(false)
            }
        }
        setAssignees(prevAssignees => {
            const newAssignees = {...prevAssignees} //O(n)
            newAssignees[toggleAssignee] = {
                ...newAssignees[toggleAssignee],
                isFilterActive: !newAssignees[toggleAssignee].isFilterActive
            }

            return newAssignees
        })
    }

    return {Assignees, addAssignee, removeAssignee, toggleAssigneeFilter, areFiltersActive}
}