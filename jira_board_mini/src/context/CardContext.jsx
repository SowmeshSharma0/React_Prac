import { createContext} from "react";
// import { useAssignee } from "../hooks/useAssignee";
import { useCards } from "../hooks/useCards";

export const CardContext = createContext();

export const CardProvider = ({children, initialAssignees = {}}) => {

    const {
        Cards, 
        DraggedCard, 
        setDraggedCard, 
        IsDragActive, 
        setIsDragActive, 
        DraggableStates, 
        setDraggableStates, 
        addCard, 
        deleteCard, 
        Assignees, 
        toggleAssigneeFilter, 
        areFiltersActive
    } = useCards()
    
    // const {Assignees, toggleAssigneeFilter, areFiltersActive} = useAssignee()
    // the problem is this was acceessing the old Assignees state, later on when Assignees got updated, it was not reflecting in the Cards component

    return (
        <CardContext.Provider
            value={{
                DraggedCard,
                setDraggedCard,
                Cards,
                addCard,
                deleteCard,
                DraggableStates,
                setDraggableStates,
                IsDragActive,
                setIsDragActive,
                Assignees,
                toggleAssigneeFilter,
                areFiltersActive,
            }}
        >
            {children}
        </CardContext.Provider>
    )
}