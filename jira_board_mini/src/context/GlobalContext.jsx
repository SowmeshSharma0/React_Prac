import { createContext } from "react";
import useScreenDetector from "../hooks/useScreenDetector";
import { main_axis_state_mapping, cross_axis_state_mapping, main_axis_IsExpandable_init, card_move_rules_horizontal, card_move_rules_vertical } from "./constants";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    
    const {usable_card_width, usable_card_height} = useScreenDetector()

    return (<GlobalContext.Provider
        value={{
            main_axis_state_mapping,
            cross_axis_state_mapping,
            main_axis_IsExpandable_init,
            card_move_rules_horizontal,
            card_move_rules_vertical,
            usable_card_width,
            usable_card_height
        }}>
        {children}
    </GlobalContext.Provider>)
}