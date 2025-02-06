import { createContext } from "react";

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

    return (<GlobalContext.Provider
        value={{
            main_axis_state_mapping,
            cross_axis_state_mapping,
            main_axis_IsExpandable_init
        }}>
        {children}
    </GlobalContext.Provider>)
}