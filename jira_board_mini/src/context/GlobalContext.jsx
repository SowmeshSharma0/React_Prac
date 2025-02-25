import { createContext } from "react";
import useScreenDetector from "./useScreenDetector";
import { main_axis_state_mapping, cross_axis_state_mapping, main_axis_IsExpandable_init, can_delete_at_cross_axis_state, card_move_rules_horizontal, card_move_rules_vertical_cross_state } from "./constants";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    
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