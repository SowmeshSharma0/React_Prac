import { createContext, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({children}) => {
    const [HTodoCards, setHTodoCards] = useState([])
    const [HInProgressCards, setHInProgressCards] = useState([])
    const [HReviewCards, setHReviewCards] = useState([])
    const [HDoneCards, setHDoneCards] = useState([])

    const [MTodoCards, setMTodoCards] = useState([])
    const [MInProgressCards, setMInProgressCards] = useState([])
    const [MReviewCards, setMReviewCards] = useState([])
    const [MDoneCards, setMDoneCards] = useState([])

    const [LTodoCards, setLTodoCards] = useState([])
    const [LInProgressCards, setLInProgressCards] = useState([])
    const [LReviewCards, setLReviewCards] = useState([])
    const [LDoneCards, setLDoneCards] = useState([])

    const addHTodoCard = (card) => {
        const newCard = {...card, cross_status: 0, priority: 2}
        setHTodoCards([...HTodoCards, newCard])
    }
    const addHInProgressCard = (card) => {
        const newCard = {...card, cross_status: 1, priority: 2}
        setHInProgressCards([...HInProgressCards, newCard])
    }
    const addHReviewCard = (card) => {
        const newCard = {...card, cross_status: 2, priority: 2}
        setHReviewCards([...HReviewCards, newCard])
    }
    const addHDoneCard = (card) => {
        const newCard = {...card, cross_status: 3, priority: 2}
        setHDoneCards([...HDoneCards, newCard])
    }


    const addMTodoCard = (card) => {
        const newCard = {...card, cross_status: 0, priority: 1}
        setMTodoCards([...MTodoCards, newCard])
    }
    const addMInProgressCard = (card) => {
        const newCard = {...card, cross_status: 1, priority: 1}
        setMInProgressCards([...MInProgressCards, newCard])
    }
    const addMReviewCard = (card) => {
        const newCard = {...card, cross_status: 2, priority: 1}
        setMReviewCards([...MReviewCards, newCard])
    }
    const addMDoneCard = (card) => {
        const newCard = {...card, cross_status: 3, priority: 1}
        setMDoneCards([...MDoneCards, newCard])
    }

    
    const addLTodoCard = (card) => {
        const newCard = {...card, cross_status: 0, priority: 0}
        setLTodoCards([...LTodoCards, newCard])
    }
    const addLInProgressCard = (card) => {
        const newCard = {...card, cross_status: 1, priority: 0}
        setLInProgressCards([...LInProgressCards, newCard])
    }
    const addLReviewCard = (card) => {
        const newCard = {...card, cross_status: 2, priority: 0}
        setLReviewCards([...LReviewCards, newCard])
    }
    const addLDoneCard = (card) => {
        const newCard = {...card, cross_status: 3, priority: 0}
        setLDoneCards([...LDoneCards, newCard])
    }

    const removeHTodoCard = (id) => setHTodoCards(HTodoCards.filter(card => card.id !== id))
    const removeHInProgressCard = (id) => setHInProgressCards(HInProgressCards.filter(card => card.id !== id))
    const removeHReviewCard = (id) => setHReviewCards(HReviewCards.filter(card => card.id !== id))
    const removeHDoneCard = (id) => setHDoneCards(HDoneCards.filter(card => card.id !== id))

    const removeMTodoCard = (id) => setMTodoCards(MTodoCards.filter(card => card.id !== id))
    const removeMInProgressCard = (id) => setMInProgressCards(MInProgressCards.filter(card => card.id !== id))
    const removeMReviewCard = (id) => setMReviewCards(MReviewCards.filter(card => card.id !== id))
    const removeMDoneCard = (id) => setMDoneCards(MDoneCards.filter(card => card.id !== id))

    const removeLTodoCard = (id) => setLTodoCards(LTodoCards.filter(card => card.id !== id))
    const removeLInProgressCard = (id) => setLInProgressCards(LInProgressCards.filter(card => card.id !== id))
    const removeLReviewCard = (id) => setLReviewCards(LReviewCards.filter(card => card.id !== id))
    const removeLDoneCard = (id) => setLDoneCards(LDoneCards.filter(card => card.id !== id))

    const [DraggedCard, setDraggedCard] = useState(null)

    return (
        <CardContext.Provider
            value={{
                DraggedCard,
                setDraggedCard,
                HTodoCards,
                HInProgressCards,
                HReviewCards,
                HDoneCards,
                MTodoCards,
                MInProgressCards,
                MReviewCards,
                MDoneCards,
                LTodoCards,
                LInProgressCards,
                LReviewCards,
                LDoneCards,
                addHTodoCard,
                addHInProgressCard,
                addHReviewCard,
                addHDoneCard,
                addMTodoCard,
                addMInProgressCard,
                addMReviewCard,
                addMDoneCard,
                addLTodoCard,
                addLInProgressCard,
                addLReviewCard,
                addLDoneCard,
                removeHTodoCard,
                removeHInProgressCard,
                removeHReviewCard,
                removeHDoneCard,
                removeMTodoCard,
                removeMInProgressCard,
                removeMReviewCard,
                removeMDoneCard,
                removeLTodoCard,
                removeLInProgressCard,
                removeLReviewCard,
                removeLDoneCard
            }}
        >
            {children}
        </CardContext.Provider>
    )
}