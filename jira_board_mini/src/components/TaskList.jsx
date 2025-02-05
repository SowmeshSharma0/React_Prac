import { useContext } from "react"
import { StyledTaskList } from "./styles/TaskList.styled"
import TaskCard from "./TaskCard"
import { CardContext } from "../context/CardContext"
import { GlobalContext } from "../context/GlobalContext"

function TaskList({main_state, cross_state}) {
  //priority based adding to task list
  const {
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
  } = useContext(CardContext)

  const {main_axis_state_mapping, cross_axis_state_mapping} = useContext(GlobalContext)

  const handleDrop = (e) => {
    e.preventDefault();

    const prev_cross_state = DraggedCard.cross_status
    const prev_main_state = DraggedCard.priority

    if(prev_cross_state === cross_axis_state_mapping[cross_state] && prev_main_state === main_axis_state_mapping[main_state]) return

    const combo_new_cell = String(main_axis_state_mapping[main_state]) + String(cross_axis_state_mapping[cross_state])
    const combo_old_cell = String(prev_main_state) + String(prev_cross_state)

    // console.log("Old Cell: ", combo_old_cell)
    // console.log("New Cell: ", combo_new_cell)
    //adding to the new cell:
    switch(combo_new_cell){
      case "20": {
        addHTodoCard(DraggedCard)
        break;
      }
      case "21": {
        addHInProgressCard(DraggedCard)
        break;
      }
      case "22": {
        addHReviewCard(DraggedCard)
        break;
      }
      case "23": {
        addHDoneCard(DraggedCard)
        break;
      }
      case "10": {
        addMTodoCard(DraggedCard)
        break;
      }
      case "11": {
        addMInProgressCard(DraggedCard)
        break;
      }
      case "12": {
        addMReviewCard(DraggedCard)
        break;
      }
      case "13": {
        addMDoneCard(DraggedCard)
        break;
      }
      case "00": {
        addLTodoCard(DraggedCard)
        break;
      }
      case "01": {
        addLInProgressCard(DraggedCard)
        break;
      }
      case "02": {
        addLReviewCard(DraggedCard)
        break;
      }
      case "03": {
        addLDoneCard(DraggedCard)
        break;
      }
      default: break;
    }

    //removing from the old cell:
    switch(combo_old_cell){
      case "20": {
        removeHTodoCard(DraggedCard.id)
        break;
      }
      case "21": {
        removeHInProgressCard(DraggedCard.id)
        break;
      }
      case "22": {
        removeHReviewCard(DraggedCard.id)
        break;
      }
      case "23": {
        removeHDoneCard(DraggedCard.id)
        break;
      }
      case "10": {
        removeMTodoCard(DraggedCard.id)
        break;
      }
      case "11": {
        removeMInProgressCard(DraggedCard.id)
        break;
      }
      case "12": {
        removeMReviewCard(DraggedCard.id)
        break;
      }
      case "13": {
        removeMDoneCard(DraggedCard.id)
        break;
      }
      case "00": {
        removeLTodoCard(DraggedCard.id)
        break;
      }
      case "01": {
        removeLInProgressCard(DraggedCard.id)
        break;
      }
      case "02": {
        removeLReviewCard(DraggedCard.id)
        break;
      }
      case "03": {
        removeLDoneCard(DraggedCard.id)
        break;
      }
      default: break;
    }
}

  // const handleDrop = (e) => {
  //   e.preventDefault();
  //   if(DraggedCard.priority !== main_axis_state_mapping[main_state])
  //   {
  //     console.log("Priority Changed", DraggedCard.priority, main_axis_state_mapping[main_state])
  //     ChangeDraggedCardPriority(main_axis_state_mapping[main_state])
  //   }


  //   const prev_cross_state = DraggedCard.cross_status
  //   switch(cross_state){
  //     case "To Do":{
  //       if(prev_cross_state === 0) return
  //       addTodoCard(DraggedCard)
  //       switch(DraggedCard.cross_status){
  //         case 1:
  //           removeInProgressCard(DraggedCard.id)
  //           break;
  //         case 2:
  //           removeReviewCard(DraggedCard.id)
  //           break;
  //         case 3:
  //           removeDoneCard(DraggedCard.id)
  //           break;
  //         default:
  //           break;
  //       }
  //       break;
  //     }
  //     case "In Progress":{
  //       if(prev_cross_state === 1) return
  //       addInProgressCard(DraggedCard)
  //       switch(DraggedCard.cross_status){
  //         case 0:
  //           removeTodoCard(DraggedCard.id)
  //           break;
  //         case 2:
  //           removeReviewCard(DraggedCard.id)
  //           break;
  //         case 3:
  //           removeDoneCard(DraggedCard.id)
  //           break;
  //         default:
  //           break;
  //       }
  //       break;
  //     }
  //     case "Review":{
  //       if(prev_cross_state === 2) return
  //       addReviewCard(DraggedCard)
  //       switch(DraggedCard.cross_status){
  //         case 0:
  //           removeTodoCard(DraggedCard.id)
  //           break;
  //         case 1:
  //           removeInProgressCard(DraggedCard.id)
  //           break;
  //         case 3:
  //           removeDoneCard(DraggedCard.id)
  //           break;
  //         default:
  //           break;
  //       }
  //       break;
  //     }
  //     case "Done":{
  //       if(prev_cross_state === 3) return
  //       addDoneCard(DraggedCard)
  //       switch(DraggedCard.cross_status){
  //         case 0:
  //           removeTodoCard(DraggedCard.id)
  //           break;
  //         case 1:
  //           removeInProgressCard(DraggedCard.id)
  //           break;
  //         case 2:
  //           removeReviewCard(DraggedCard.id)
  //           break;
  //         default:
  //           break;
  //       }
  //       break;
  //     }
  //     default:
  //       break;
  //   }
  // }

  function getRenderCards(main_state, cross_state){
    const helper = (Todo, InProgress, Review, Done) => {
      switch(cross_axis_state_mapping[cross_state]){
        case 0 : return Todo
        case 1 :return  InProgress
        case 2 :return Review
        case 3 :return Done
      }
    }
    switch(main_axis_state_mapping[main_state]){
      case 2 : return helper(HTodoCards,HInProgressCards, HReviewCards, HDoneCards)
      case 1 : return helper(MTodoCards, MInProgressCards, MReviewCards, MDoneCards)
      case 0 : return helper(LTodoCards, LInProgressCards, LReviewCards, LDoneCards)
      default: return []
    }
  }

  let renderCards = getRenderCards(main_state, cross_state)

  
  return (
    <StyledTaskList onDragOver={(e) => e.preventDefault()} onDrop={handleDrop} onClick={() => console.log("TaskList: ", main_state, cross_state)}>
        {/* <p>{task_state}</p> */}
        {renderCards.map((card) => <TaskCard card={card} key={card.id}/>)}
    </StyledTaskList>
  )
}

export default TaskList
