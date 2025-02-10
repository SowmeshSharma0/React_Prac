import { useContext } from "react"
import { StyledTaskList } from "./styles/TaskList.styled"
import TaskCard from "./TaskCard"
import { CardContext } from "../context/CardContext"

function TaskList({main_state, cross_state}) {
  //priority based adding to task list
  const {
    DraggedCard,
    Cards,
    addCard,
    deleteCard,
  } = useContext(CardContext)

  const handleDrop = (e) => {
    e.preventDefault();

    if(DraggedCard.cross_status === cross_state && DraggedCard.priority === main_state) return

    deleteCard(DraggedCard.id)
    addCard(DraggedCard, main_state, cross_state)

    //i did addFirst and then delete it was behaving wierdly, but then then reversed the order and it worked fine
  }

  const renderCards = Cards.filter(card => card.cross_status === cross_state && card.priority === main_state)
  
  return (
    <StyledTaskList onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
        {renderCards.map((card) => <TaskCard card={card} key={card.id}/>)}
    </StyledTaskList>
  )
}

export default TaskList
