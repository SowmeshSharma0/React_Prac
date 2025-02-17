import { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({children}) => {

    const [Cards, setCards] = useState(() => {
        const savedCards = localStorage.getItem('cards')
        return savedCards ? JSON.parse(savedCards) : []
    })
    const [Assignees, setAssignees] = useState(() => {
        const savedAssignees = localStorage.getItem('assignees')
        return savedAssignees ? JSON.parse(savedAssignees) : {}
    });
    const [DraggedCard, setDraggedCard] = useState(null)
    const [IsDragActive, setIsDragActive] = useState(false)
    const [DraggableStates, setDraggableStates] = useState({})

    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(Cards))
    }, [Cards])
    
    useEffect(() => {
        localStorage.setItem('assignees', JSON.stringify(Assignees))
    }, [Assignees])

    //index the cards by id for easy access
    const [CardsIndex, setCardsIndex] = useState(() => {
        const savedCardsIndex = localStorage.getItem('cardsIndex')
        return savedCardsIndex ? JSON.parse(savedCardsIndex) : {}
    })

    useEffect(() => {
        localStorage.setItem('cardsIndex', JSON.stringify(CardsIndex))
    }, [CardsIndex])

    const addCard = (card, _priority, _cross_status) => {
        const newCard = {...card, priority: Number(_priority), cross_status: Number(_cross_status)}
        setCards(prevCards => [...prevCards, newCard])
        setCardsIndex(prevCardsIndex => {
            const newCardsIndex = {...prevCardsIndex}
            newCardsIndex[newCard.id] = newCard
            return newCardsIndex
        })
        
        setAssignees(prevAssignees => {

            if(newCard.assignee in prevAssignees){
                return {
                    ...prevAssignees,
                    [newCard.assignee] : {
                        count: prevAssignees[newCard.assignee].count + 1,
                        isFilterActive: prevAssignees[newCard.assignee].isFilterActive
                    }
                 }
            }
                
            else{
                return {
                    ...prevAssignees,
                    [newCard.assignee] : {
                        count: 1,
                        isFilterActive: true
                    }
                }
            }
        })
    }

    const deleteCard = (id) => {

        const newCards = Cards.filter(card => card.id !== id) //O(n)
        const delAssignee = CardsIndex[id].assignee

        setCardsIndex(prevCardsIndex => {
            const {[id]: _, ...newCardsIndex} = prevCardsIndex //O(n)
            return newCardsIndex
        })

        setAssignees(prevAssignees => {
            if (!prevAssignees[delAssignee]) return prevAssignees
            
            if(prevAssignees[delAssignee].count > 1){
                return {
                    ...prevAssignees,
                    [delAssignee]: {
                        ...prevAssignees[delAssignee],
                        count: prevAssignees[delAssignee].count - 1,
                        isFilterActive: prevAssignees[delAssignee].isFilterActive
                    }
                }
            }
            else{
                const {[delAssignee] : _, ...rest} = prevAssignees
                return rest
            }
        })

        setCards(newCards)
    }

    const toggleAssigneeFilter = (toggleAssignee) => {

        setAssignees(prevAssignees => {
            const newAssignees = {...prevAssignees} //O(n)
            newAssignees[toggleAssignee] = {
                ...newAssignees[toggleAssignee],
                isFilterActive: !newAssignees[toggleAssignee].isFilterActive
            }

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