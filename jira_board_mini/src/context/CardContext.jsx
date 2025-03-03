import { createContext, useEffect, useState } from "react";
import getCardsAPI from "../services/getCards"
import { addCardAPI, deleteCardAPI } from "../services/setCards"
import { useAssignee } from "../hooks/useAssignee";

export const CardContext = createContext();

export const CardProvider = ({children, initialAssignees = {}}) => {

    const [Cards, setCards] = useState([])

    const [DraggedCard, setDraggedCard] = useState(null)
    const [IsDragActive, setIsDragActive] = useState(false)
    const [DraggableStates, setDraggableStates] = useState({})
    
    const {Assignees, addAssignee, removeAssignee, toggleAssigneeFilter, areFiltersActive} = useAssignee()

    useEffect(() => {
        const fetchCards = async () => {
            const {cards: fetchedCards, isCached} = await getCardsAPI()
            setCards(fetchedCards)

            if(isCached)
                return

            fetchedCards.forEach(card => {
                addAssignee(card.assignee)
            })
        }
        fetchCards()
    }, [])

    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(Cards))
    }, [Cards])

    const addCard = async (card, _priority, _cross_status) => {
        const newCard = {...card, priority: Number(_priority), cross_status: Number(_cross_status)}

        setCards(prevCards => [...prevCards, newCard])

        addAssignee(newCard.assignee)

        const response = await addCardAPI(newCard)
        console.log(response)
    }
    const deleteCard = async (id) => {
        const newCards = Cards.filter(card => card.id !== id) //O(n)
        const delAssignee = Cards.find(card => card.id === id).assignee //O(n) ; earlier using CardsIndex[id].assignee, it was O(1)

        removeAssignee(delAssignee)

        setCards(newCards)

        const response = await deleteCardAPI(id)
        console.log(response)
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
                toggleAssigneeFilter,
                areFiltersActive,
            }}
        >
            {children}
        </CardContext.Provider>
    )
}