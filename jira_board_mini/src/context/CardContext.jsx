import { createContext, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({children}) => {

    const [Cards, setCards] = useState([])

    const addCard = (card, _priority, _cross_status) => {
        const newCard = {...card, priority: Number(_priority), cross_status: Number(_cross_status)}
        // console.log("Current Cards: ", Cards)
        // console.log("Adding: ", newCard)
        setCards(prevCards => [...prevCards, newCard])
    }

    const deleteCard = (id) => {
        // console.log("Current Cards: ", Cards)
        // console.log("Deleting: ", id)
        setCards(Cards.filter(card => card.id !== id))
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
                setIsDragActive
            }}
        >
            {children}
        </CardContext.Provider>
    )
}