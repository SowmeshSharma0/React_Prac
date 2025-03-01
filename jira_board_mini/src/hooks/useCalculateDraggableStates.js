import { useCallback, useContext, useMemo } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { CardContext } from "../context/CardContext"


const useCalculateDraggableStates = ({main_state, cross_state}) => {

    const {card_move_rules_horizontal, card_move_rules_vertical} = useContext(GlobalContext)
    const {setDraggableStates} = useContext(CardContext)

    console.log("main_state", main_state, "cross_state", cross_state)

    const DraggableStates = useMemo(() => {
        const newDraggableStates = {}

        // Initialize all states as false
        for (let i = 0; i < 3; i++) {
            newDraggableStates[i] = {}
            for (let j = 0; j < 4; j++) {
                newDraggableStates[i][j] = false
            }
        }

        // Set states for horizontal movement (same row)
        const same_row_travel = card_move_rules_horizontal[cross_state]
        for (let j of same_row_travel) {
            newDraggableStates[main_state][j] = true
        }

        // Set states for vertical movement (same column)
        const same_column_travel = card_move_rules_vertical[main_state]
        for (let i of same_column_travel) {
            newDraggableStates[i][cross_state] = true
        }

        console.log("Calculating Draggable States:", main_state, cross_state, newDraggableStates)
        return newDraggableStates
    }, [main_state, cross_state])

    return useCallback(() => {
        setDraggableStates(DraggableStates)
    }, [DraggableStates, setDraggableStates])
}

export default useCalculateDraggableStates
