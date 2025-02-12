import { createContext, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({children}) => {

    const [Cards, setCards] = useState([])
    const [Assignees, setAssignees] = useState(new Set());
    const [DraggedCard, setDraggedCard] = useState(null)
    const [IsDragActive, setIsDragActive] = useState(false)
    const [DraggableStates, setDraggableStates] = useState({})

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

    const checkForExistingAssignee = (checkVal, newCards) => {
        return newCards.some(card => card.assignee === checkVal)
    }

    const deleteCard = (id) => {
        const delVal = Cards.find(card => card.id === id).assignee
        const newCards = Cards.filter(card => card.id !== id)

        //check if there are any other cards with the same assignee
        const moreCards = checkForExistingAssignee(delVal, newCards)

        setCards(newCards)

        if(!moreCards){
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