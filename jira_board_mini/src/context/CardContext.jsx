import { createContext, useEffect, useState } from "react";

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
    // const CardsIndex = {}
    //index the cards by assignee for easy access
    const [AssigneesIndex, setAssigneesIndex] = useState({})
    // const AssigneesIndex = {}

    const addCard = (card, _priority, _cross_status) => {
        const newCard = {...card, priority: Number(_priority), cross_status: Number(_cross_status)}
        setCards(prevCards => [...prevCards, newCard])
        setCardsIndex(prevCardsIndex => {
            const newCardsIndex = {...prevCardsIndex}
            newCardsIndex[newCard.id] = newCard
            return newCardsIndex
        })
        // CardsIndex[newCard.id] = newCard
        // console.log("In Add : CardsIndex: ", CardsIndex)
        // console.log("In Add : Length of CardsIndex: ", Object.keys(CardsIndex).length)

        setAssigneesIndex(prevAssigneesIndex => {
            const newAssigneesIndex = {...prevAssigneesIndex}
            newAssigneesIndex[newCard.assignee] = newCard
            return newAssigneesIndex
        })
        // AssigneesIndex[newCard.assignee] = newCard
        
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

    const [executeCheck, setExecuteCheck] = useState(null)

    // const checkForExistingAssignee = (checkVal) => {
    //     return AssigneesIndex[checkVal] !== undefined //O(1)
    // }

    useEffect(() => {
        if(executeCheck === null) return

        const AreThereMoreCards = (executeCheck) => {
            return AssigneesIndex[executeCheck] !== undefined //O(1)
        }

        if(!AreThereMoreCards){
            setAssignees(prevAssignees => {
                const newAssignees = {...prevAssignees} //O(n)
                delete newAssignees[executeCheck] //O(1)

                return newAssignees
            })
        }
        setExecuteCheck(null)
    }, [executeCheck])

    const deleteCard = (id) => {

        // console.log("In Del : CardsIndex: ", CardsIndex)
        // console.log("In Del : Length of CardsIndex: ", Object.keys(CardsIndex).length)

        const delAssigneeVal = CardsIndex[id].assignee //O(1)
        const newCards = Cards.filter(card => card.id !== id) //O(n)

        //gotta delete from cardsIndex as well:
        setCardsIndex(prevCardsIndex => {
            const newCardsIndex = {...prevCardsIndex} //O(n)
            delete newCardsIndex[id] //O(1)
            return newCardsIndex
        })
        // delete CardsIndex[id]
        //delete from assigneesIndex as well:
        setAssigneesIndex(prevAssigneesIndex => {
            const newAssigneesIndex = {...prevAssigneesIndex} //O(n)
            delete newAssigneesIndex[delAssigneeVal] //O(1)

            return newAssigneesIndex
        })

        setExecuteCheck(delAssigneeVal)

        // delete AssigneesIndex[delAssigneeVal]

        //check if there are any other cards with the same assignee
        // const AreThereMoreCards = checkForExistingAssignee(delAssigneeVal) //O(1)

        setCards(newCards)

        // if(!AreThereMoreCards){
        //     setAssignees(prevAssignees => {
        //         const newAssignees = {...prevAssignees} //O(n)
        //         delete newAssignees[delAssigneeVal] //O(1)

        //         return newAssignees
        //     })
        // }
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