import { useContext, useState } from "react"
import { StyledTaskCard } from "./styles/TaskCard.styled"
import { CardContext } from "../context/CardContext"
import CardDialog from "./CardDialog"

function TaskCard({card}) {

    const {setDraggedCard} = useContext(CardContext)
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <>
            <StyledTaskCard draggable onDrag={() => setDraggedCard(card)} onDragStart={(e) => {
                // e.dataTransfer.setData("text/plain", card.id);
                setTimeout(() => {
                    e.target.style.visibility = "hidden";
                }, 0);
            }}
            onDragEnd={(e) => {
                e.target.style.visibility = "visible";
            }}
            cardPrio = {card.priority}
            onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="cardHeader">
                    <div></div>
                    <h3>{card.title}</h3>
                    <div className="priority">
                        {/* <p>{card.priority}</p> */}
                    </div>
                </div>
                {/* <p>{card.description}</p>
                <p>{card.assignee}</p>
                <p>{card.reporter}</p> */}
                {/* opens when clicked */}
                <p>Due Date: {card.due_date}</p>
            </StyledTaskCard>
            <CardDialog IsOpenModal={isExpanded} closeModal={() => setIsExpanded(!isExpanded)} card={card}/>
        </>
    )
}

export default TaskCard
