import { useCallback, useContext, useState } from "react"
import { StyledTaskCard } from "./styles/TaskCard.styled"
import { CardContext } from "../context/CardContext"
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { GlobalContext } from "../context/GlobalContext";
import AddTaskDialog from "./AddTaskDialog";
import { memo } from "react";
import useCalculateDraggableStates from "../hooks/useCalculateDraggableStates";

function TaskCard({card}) {

    const {setDraggedCard, setDraggableStates, setIsDragActive} = useContext(CardContext)
    const {card_move_rules_horizontal, card_move_rules_vertical_cross_state} = useContext(GlobalContext)
    const [isExpanded, setIsExpanded] = useState(false)

    const calculateDraggableStates = useCalculateDraggableStates({main_state: card.priority, cross_state: card.cross_status})

    const handleOnDrag = useCallback((e) => {
        setDraggedCard(card)
    }, [card, setDraggedCard])

    const handleOnDragStart = useCallback((e) => {
        setIsDragActive(true)
        setTimeout(() => {
            e.target.style.visibility = "hidden";
        }, 0);
        calculateDraggableStates();
    }, [setIsDragActive])

    const handleOnDragEnd = useCallback((e) => {
        e.target.style.visibility = "visible";
    }, [])

    return (
        <>
            <StyledTaskCard 
                draggable 
                onDrag={handleOnDrag} 
                onDragStart={handleOnDragStart}
                onDragEnd={handleOnDragEnd}
                cardprio = {card.priority}
                onClick={() => {
                    setIsExpanded(!isExpanded)
                }}
            >
                <div className="cardHeader">
                    <div></div>
                    <h3>{card.title}</h3>
                    <PriorityHighIcon className="priority" />
                </div>

                <div className="content">
                    <p className="description">{card.description}</p>
                    <p>Due Date: {card.due_date}</p>
                </div>
            </StyledTaskCard>
            <AddTaskDialog 
                openModal={isExpanded} 
                closeModal={() => setIsExpanded(false)} 
                card={card}
            />
        </>
    )
}

export default memo(TaskCard)
