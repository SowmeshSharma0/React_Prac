import { createContext } from "react";
import useScreenDetector from "./useScreenDetector";
import { main_axis_state_mapping, cross_axis_state_mapping, main_axis_IsExpandable_init, can_delete_at_cross_axis_state, card_move_rules_horizontal, card_move_rules_vertical_cross_state } from "./constants";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

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