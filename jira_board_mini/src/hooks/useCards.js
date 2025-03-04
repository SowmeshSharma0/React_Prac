import { useEffect, useState } from "react"
import { addCardAPI, deleteCardAPI } from "../services/setCards"
import { useAssignee } from "../hooks/useAssignee";
import getCardsAPI from "../services/getCards"


export const useCards = () => {
    const [Cards, setCards] = useState(null)
    const [DraggedCard, setDraggedCard] = useState(null)
    const [IsDragActive, setIsDragActive] = useState(false)
    const [DraggableStates, setDraggableStates] = useState({})

    const {addAssignee, removeAssignee, Assignees, toggleAssigneeFilter, areFiltersActive} = useAssignee()

    useEffect(() => {
        if(Cards === null)
            return
        localStorage.setItem('cards', JSON.stringify(Cards))
    }, [Cards])

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

    return {Cards, DraggedCard, setDraggedCard, IsDragActive, setIsDragActive, DraggableStates, setDraggableStates, addCard, deleteCard, Assignees, toggleAssigneeFilter, areFiltersActive}
}