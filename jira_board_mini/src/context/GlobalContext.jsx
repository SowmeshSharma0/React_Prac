import { createContext, useMemo } from "react";
import useScreenDetector from "../hooks/useScreenDetector";
import { main_axis_state_mapping, cross_axis_state_mapping, main_axis_IsExpandable_init, card_move_rules_horizontal, card_move_rules_vertical } from "./constants";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    
    const {usable_card_width, usable_card_height} = useScreenDetector()

    const memoized_return_values = useMemo(() => {
        return {
            main_axis_state_mapping,
            cross_axis_state_mapping,
            main_axis_IsExpandable_init,
            card_move_rules_horizontal,
            card_move_rules_vertical,
            usable_card_width,
            usable_card_height
        }
    }, [usable_card_width, usable_card_height])

    return (<GlobalContext.Provider
        value={memoized_return_values}>
        {children}
    </GlobalContext.Provider>)
}