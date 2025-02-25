import { createContext, useEffect, useState } from "react";
import getCardsAPI from "../services/getCards"
import setCardsAPI from "../services/setCards"

export const CardContext = createContext();

export const CardProvider = ({children, initialAssignees = {}}) => {

    // const [batch, setBatch] = useState([])
    // const [callCounter, setCallCounter] = useState(0)
    //batch is an array of cards ; when it reaches size 5, we call the api;
    //there are some issues with this: 
    //1. if the call counter reaches 5, the api call is delayed by 1 second;
    //2. if the call counter never reaches 5 in a particular session: then what ?

    useEffect(() => {
        const fetchCards = async () => {
            const fetchedCards = await getCardsAPI()
            setCards(fetchedCards)
            setCardsIndex(() => {
                const cardsIndex = {}
                fetchedCards.forEach(card => {
                    cardsIndex[card.id] = card
                })
                return cardsIndex
            })
            setAssignees(prevAssignees => {
                const newAssignees = {...prevAssignees};
                
                fetchedCards.forEach(card => {
                    if (card.assignee in newAssignees) {
                        newAssignees[card.assignee] = {
                            count: newAssignees[card.assignee].count + 1,
                            isFilterActive: newAssignees[card.assignee].isFilterActive
                        };
                    } else {
                        newAssignees[card.assignee] = {
                            count: 1,
                            isFilterActive: false
                        };
                    }
                });
                return newAssignees;
            });
        }
        fetchCards()
    }, [])

    const [Cards, setCards] = useState([])
    const [Assignees, setAssignees] = useState(() => {

        if(initialAssignees.length > 0){
            return initialAssignees
        }

        const savedAssignees = localStorage.getItem('assignees')
        return savedAssignees ? JSON.parse(savedAssignees) : {}
    });
    const [DraggedCard, setDraggedCard] = useState(null)
    const [IsDragActive, setIsDragActive] = useState(false)
    const [DraggableStates, setDraggableStates] = useState({})

    const [areFiltersActive, setAreFiltersActive] = useState(false)
    
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

    const addCard = async (card, _priority, _cross_status) => {
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
                        // isFilterActive: true : has 3 states: "init", "true", "false" : lets see; this will break a lot of things
                        isFilterActive: false
                    }
                }
            }
        })

        const response = await setCardsAPI([...Cards, newCard])
        console.log(response)
    }
    const deleteCard = async (id) => {
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

        const response = await setCardsAPI(newCards)
        console.log(response)
    }

    const toggleAssigneeFilter = (toggleAssignee) => {

        if(Assignees[toggleAssignee].isFilterActive === false){
            setAreFiltersActive(true)
        }
        else{
            //basically u are toggling toggleAssignee off; check if all other filters are off as well
            let allFiltersOff = true
            Object.keys(Assignees).forEach(assigneeKey => {
                if(assigneeKey !== toggleAssignee && Assignees[assigneeKey].isFilterActive === true){
                    allFiltersOff = false
                    return
                }
            })
            if(allFiltersOff){
                setAreFiltersActive(false)
            }
        }
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
                toggleAssigneeFilter,
                areFiltersActive,
            }}
        >
            {children}
        </CardContext.Provider>
    )
}