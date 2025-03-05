import { useEffect, useRef, useState } from "react"
import { addCardAPI, deleteCardAPI, updateCardAPI } from "../services/setCards"
import { useAssignee } from "../hooks/useAssignee";
import getCardsAPI from "../services/getCards"


export const useCards = () => {
    const [Cards, setCards] = useState(null)
    const [DraggedCard, setDraggedCard] = useState(null)
    const [IsDragActive, setIsDragActive] = useState(false)
    const DraggableStates = useRef({})

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
        const newCards = Cards.filter(card => card.id !== id)
        const delAssignee = Cards.find(card => card.id === id).assignee

        removeAssignee(delAssignee)

        setCards(newCards)

        const response = await deleteCardAPI(id)
        console.log(response)
    }

    const updateCard = async (id, updateObject) => {
        // console.log(updateObject)
        const checkCard = Cards.find(card => card.id === id)
        if(checkCard.assignee !== updateObject.assignee)
        {
            removeAssignee(checkCard.assignee)
            addAssignee(updateObject.assignee)
        }
        setCards(prevCards => prevCards.map(card => {
            if(card.id === id)
            {
                return {...card, ...updateObject}
            }
            return card
        }))

        const response = await updateCardAPI({...updateObject, id})
        console.log(response)
    }

    return {Cards, DraggedCard, setDraggedCard, IsDragActive, setIsDragActive, DraggableStates, addCard, deleteCard, updateCard, Assignees, toggleAssigneeFilter, areFiltersActive}
}