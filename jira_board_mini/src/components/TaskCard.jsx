import { useContext } from "react"
import { StyledTaskCard } from "./styles/TaskCard.styled"
import { CardContext } from "../context/CardContext"

function TaskCard({card}) {

    const {setDraggedCard} = useContext(CardContext)

    return (
        <StyledTaskCard draggable onDrag={() => setDraggedCard(card)} onDragStart={(e) => {
            // e.dataTransfer.setData("text/plain", card.id);
            setTimeout(() => {
                e.target.style.visibility = "hidden";
            }, 0);
        }}
        onDragEnd={(e) => {
            e.target.style.visibility = "visible";
        }}
        >
            <div className="cardHeader">
                <h3>{card.title}</h3>
                <p>{card.priority}</p>
            </div>
            {/* <p>{card.description}</p>
            <p>{card.assignee}</p>
            <p>{card.reporter}</p> */}
            {/* opens when clicked */}
            <p>{card.due_date}</p>
        </StyledTaskCard>
    )
}

export default TaskCard
