import { createContext, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({children}) => {

    const [Cards, setCards] = useState([])
    const [Assignees, setAssignees] = useState(new Set());

    const addCard = (card, _priority, _cross_status) => {
        const newCard = {...card, priority: Number(_priority), cross_status: Number(_cross_status)}
        setCards(prevCards => [...prevCards, newCard])
        setAssignees(prevAssignees => {
            let hasSameAssignee = false
            prevAssignees.forEach(assignee => {
                if (assignee.assignee === newCard.assignee) {
                    hasSameAssignee = true
                }
            })
            if (hasSameAssignee) 
                return prevAssignees

            const newAssignees = new Set([...prevAssignees])
            newAssignees.add({
                assignee: newCard.assignee,
                isFilterActive: true
            })
            return newAssignees
        })
    }

    const deleteCard = (id) => {
        setCards(Cards.filter(card => card.id !== id))
        const delVal = Cards.find(card => card.id === id).assignee

        setAssignees(prevAssignees => {
            const newAssignees = new Set([...prevAssignees])
            newAssignees.forEach(assignee => {
                if (assignee.assignee === delVal) {
                    newAssignees.delete(assignee)
                }
            })
            return newAssignees
        })
    }

    const toggleAssigneeFilter = (toggleAssignee) => {

        setAssignees(prevAssignees => {
            const newAssignees = new Set()
            Array.from(prevAssignees).forEach(item => {
                if(item.assignee === toggleAssignee.assignee){
                    newAssignees.add({
                        ...item,
                        isFilterActive: !item.isFilterActive
                    })
                }
                else{
                    newAssignees.add(item)
                }
            })
            return newAssignees
        })
    }

    const [DraggedCard, setDraggedCard] = useState(null)
    const [IsDragActive, setIsDragActive] = useState(false)
    const [DraggableStates, setDraggableStates] = useState({})

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
                toggleAssigneeFilter
            }}
        >
            {children}
        </CardContext.Provider>
    )
}