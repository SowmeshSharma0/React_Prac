import { useContext, useState } from "react"
import { StyledTaskCard } from "./styles/TaskCard.styled"
import { CardContext } from "../context/CardContext"
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { GlobalContext } from "../context/GlobalContext";
import AddTaskDialog from "./AddTaskDialog";

function TaskCard({card}) {

    const {setDraggedCard, setDraggableStates, setIsDragActive} = useContext(CardContext)
    const {card_move_rules_horizontal, card_move_rules_vertical_cross_state} = useContext(GlobalContext)
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <>
            <StyledTaskCard 
                draggable 
                onDrag={() => setDraggedCard(card)} 
                onDragStart={(e) => {
                setIsDragActive(true)
                // e.dataTransfer.setData("text/plain", card.id);
                setTimeout(() => {
                    e.target.style.visibility = "hidden";
                }, 0);
                const calculateDraggableStates = (card) => {
                    const DraggableStates = {}
                    for (let i = 0; i < 3; i++) {
                        DraggableStates[i] = {}
                        for (let j = 0; j < 4; j++) {
                            DraggableStates[i][j] = false
                        }
                    }
                    for(let i=0; i < 3; i++)
                    {
                        for(let j=0; j < 4; j++)
                        {
                            if( i === card.priority){
                                if(card_move_rules_horizontal[card.cross_status].includes(j)){
                                    DraggableStates[i][j] = true
                                }
                            }
                            else{
                                if(card_move_rules_vertical_cross_state[card.cross_status].includes(j)){
                                    DraggableStates[i][j] = true
                                }
                            }
                        }
                    }
                    setDraggableStates(DraggableStates)
                }
                calculateDraggableStates(card);
            }}
            onDragEnd={(e) => {
                e.target.style.visibility = "visible";
            }}
            cardprio = {card.priority}
            onClick={(e) => {
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

export default TaskCard
