import { createContext } from "react";
import useScreenDetector from "./useScreenDetector";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const main_axis_state_mapping = {
        2: "High Priority", //high priority tasks
        1: "Medium Priority",
        0: "Low Priority",
    }
    const cross_axis_state_mapping = {
        0: "To Do",
        1: "In Progress",
        2: "Review",
        3: "Done"
    }

    const main_axis_IsExpandable_init = {
        2: false,
        1: false,
        0: true
    }

    const can_delete_at_cross_axis_state = {
        0: true,
        1: false,
        2: true,
        3: true
    }

    // //"+x" means the card can move x states forward
    // //"" means the card cannot move to any other state
    // //"-x" means the card can move x states backward
    // //"+*x" means the card can move 1-x states forward
    // //"-*x" means the card can move 1-x states backward

    // const card_move_rules = {
    //     0: "+1",
    //     1: "+1",
    //     2: "+1",
    //     3: ""
    // }

    const card_move_rules_horizontal = {
        0: [1],
        1: [2],
        2: [3],
        3: []
    }

    const card_move_rules_vertical_cross_state = {
        0: [0],
        1: [1],
        2: [2],
        3: []
    }
    
    const {usable_card_width, usable_card_height} = useScreenDetector()

    return (<GlobalContext.Provider
        value={{
            main_axis_state_mapping,
            cross_axis_state_mapping,
            main_axis_IsExpandable_init,
            can_delete_at_cross_axis_state,
            card_move_rules_horizontal,
            card_move_rules_vertical_cross_state,
            usable_card_width,
            usable_card_height
        }}>
        {children}
    </GlobalContext.Provider>)
}