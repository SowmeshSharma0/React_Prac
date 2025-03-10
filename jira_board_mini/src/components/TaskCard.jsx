import { useCallback, useContext } from "react"
import { StyledTaskCard } from "./styles/TaskCard.styled"
import { CardContext } from "../context/CardContext"
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import AddTaskDialog from "./AddTaskDialog";
import { memo } from "react";
import useCalculateDraggableStates from "../hooks/useCalculateDraggableStates";
import { useToggle } from "../hooks/useToggle";

function TaskCard({card}) {

    const {setDraggedCard, setIsDragActive} = useContext(CardContext)
    const [isModalOpen, toggleModal] = useToggle(false)

    const calculateDraggableStates = useCalculateDraggableStates(card.priority, card.cross_status)

    const handleOnDragStart = useCallback((e) => {
        setDraggedCard(card)
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
                onDragStart={handleOnDragStart}
                onDragEnd={handleOnDragEnd}
                cardprio = {card.priority}
                onClick={toggleModal}
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
                openModal={isModalOpen} 
                closeModal={() => toggleModal(false)} 
                card={card}
            />
        </>
    )
}

export default memo(TaskCard)
