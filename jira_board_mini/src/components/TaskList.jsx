import { useContext } from "react"
import { StyledTaskList } from "./styles/TaskList.styled"
import TaskCard from "./TaskCard"
import { CardContext } from "../context/CardContext"
import { GlobalContext } from "../context/GlobalContext"

function TaskList({main_state, cross_state}) {
  const {
    DraggedCard,
    Cards,
    updateCard,
    DraggableStates,
    IsDragActive,
    setIsDragActive,
    Assignees,
    areFiltersActive
  } = useContext(CardContext)


  const {usable_card_width, usable_card_height} = useContext(GlobalContext)

  const handleDrop = (e) => {
    // why prevent default here
    e.preventDefault();
    setIsDragActive(false)

    if(!DraggableStates.current[main_state][cross_state]) return
    
    updateCard(DraggedCard.id, {priority: main_state, cross_status: cross_state})
    // DraggedCard.priority = main_state
    // DraggedCard.cross_status = cross_state

    //make an update card api call here

    // deleteCard(DraggedCard.id)
    // addCard(DraggedCard, main_state, cross_state)

    // addCard(DraggedCard, main_state, cross_state)
    // deleteCard(DraggedCard.id)


    //i did addFirst and then delete it was behaving wierdly, but then then reversed the order and it worked fine
  }

  if(Cards === null)
    return <div></div>

  let renderCards = Cards.filter(card => card.cross_status === cross_state && card.priority === main_state)

  if(areFiltersActive){
    //go over assignees and see what all are active : filter stage 2
    renderCards = renderCards.filter(card => Assignees[card.assignee].isFilterActive)
  }
  
  return (
    <StyledTaskList 
      onDragOver={(e) => e.preventDefault()} 
      onDrop={handleDrop} 
      DraggableStates={DraggableStates.current} 
      main_state={main_state} 
      cross_state={cross_state}
      isDragActive={IsDragActive}
      usable_card_width={usable_card_width}
      usable_card_height={usable_card_height}
    >
        {renderCards.map((card) => <TaskCard card={card} key={card.id}/>)}
    </StyledTaskList>
  )
}

export default TaskList
