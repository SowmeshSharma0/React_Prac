import { useContext, useEffect, useState } from "react"
import { StyledTaskList } from "./styles/TaskList.styled"
import TaskCard from "./TaskCard"
import { CardContext } from "../context/CardContext"
import { GlobalContext } from "../context/GlobalContext"

function TaskList({main_state, cross_state}) {
  //priority based adding to task list
  const {
    DraggedCard,
    Cards,
    addCard,
    deleteCard,
    DraggableStates,
    IsDragActive,
    setIsDragActive,
    Assignees
  } = useContext(CardContext)

  const {usable_card_width, usable_card_height} = useContext(GlobalContext)

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false)

    if((DraggedCard.cross_status === cross_state && DraggedCard.priority === main_state) 
      || !DraggableStates[main_state][cross_state]
    ) return

    deleteCard(DraggedCard.id)
    addCard(DraggedCard, main_state, cross_state)

    // addCard(DraggedCard, main_state, cross_state)
    // deleteCard(DraggedCard.id)


    //i did addFirst and then delete it was behaving wierdly, but then then reversed the order and it worked fine
  }

  let renderCards = Cards.filter(card => card.cross_status === cross_state && card.priority === main_state)

  //go over assignees and see what all are active : filter stage 2
  renderCards = renderCards.filter(card => Assignees[card.assignee].isFilterActive)
  
  return (
    <StyledTaskList 
      onDragOver={(e) => e.preventDefault()} 
      onDrop={handleDrop} 
      DraggableStates={DraggableStates} 
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
