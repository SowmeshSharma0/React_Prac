import { createContext, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({children}) => {

    const [Cards, setCards] = useState([])
    const [Assignees, setAssignees] = useState({});
    const [DraggedCard, setDraggedCard] = useState(null)
    const [IsDragActive, setIsDragActive] = useState(false)
    const [DraggableStates, setDraggableStates] = useState({})

    //new format of Assignees:
    // {
    //     '<assignee>' : '<isFilterActive>'
    // }

    //index the cards by id for easy access
    const [CardsIndex, setCardsIndex] = useState({})
    //index the cards by assignee for easy access
    const [AssigneesIndex, setAssigneesIndex] = useState({})

    const addCard = (card, _priority, _cross_status) => {
        const newCard = {...card, priority: Number(_priority), cross_status: Number(_cross_status)}
        setCards(prevCards => [...prevCards, newCard])
        setCardsIndex(prevCardsIndex => {
            const newCardsIndex = {...prevCardsIndex}
            newCardsIndex[newCard.id] = newCard
            return newCardsIndex
        })
        setAssigneesIndex(prevAssigneesIndex => {
            const newAssigneesIndex = {...prevAssigneesIndex}
            newAssigneesIndex[newCard.assignee] = newCard
            return newAssigneesIndex
        })
        
        setAssignees(prevAssignees => {
            if(newCard.assignee in prevAssignees) //O(1) : if already there don't add
                return prevAssignees

            const newAssignees = {...prevAssignees} //O(n)
            newAssignees[newCard.assignee] = true

            return newAssignees
        })
    }

    // const checkForExistingAssignee = (checkVal, newCards) => {
    //     return newCards.some(card => card.assignee === checkVal) //O(n)
    // }

    const checkForExistingAssignee = (checkVal) => {
        return AssigneesIndex[checkVal] !== undefined //O(1)
    }

    const deleteCard = (id) => {
        const delAssigneeVal = CardsIndex[id].assignee //O(1)
        const newCards = Cards.filter(card => card.id !== id) //O(n)

        //gotta delete from cardsIndex as well:
        setCardsIndex(prevCardsIndex => {
            const newCardsIndex = {...prevCardsIndex} //O(n)
            delete newCardsIndex[id] //O(1)
            return newCardsIndex
        })

        //delete from assigneesIndex as well:
        setAssigneesIndex(prevAssigneesIndex => {
            const newAssigneesIndex = {...prevAssigneesIndex} //O(n)
            delete newAssigneesIndex[delAssigneeVal] //O(1)

            return newAssigneesIndex
        })

        setCards(newCards)

        //check if there are any other cards with the same assignee
        const AreThereMoreCards = checkForExistingAssignee(delAssigneeVal) //O(1)

        if(!AreThereMoreCards){
            setAssignees(prevAssignees => {
                const newAssignees = {...prevAssignees} //O(n)
                delete newAssignees[delAssigneeVal] //O(1)

                return newAssignees
            })
        }
    }

    const toggleAssigneeFilter = (toggleAssignee) => {

        setAssignees(prevAssignees => {
            const newAssignees = {...prevAssignees} //O(n)
            newAssignees[toggleAssignee] = !newAssignees[toggleAssignee] //O(1)

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