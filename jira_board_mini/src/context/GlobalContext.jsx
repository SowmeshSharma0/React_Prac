import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const cross_axis_states = ["To Do", "In Progress", "Review", "Done"]
    const main_axis_states = ["High Priority", "Medium Priority", "Low Priority"]
    const main_axis_state_mapping = {
        "High Priority": 2, //high priority tasks
        "Medium Priority": 1,
        "Low Priority": 0
    }
    const cross_axis_state_mapping = {
        "To Do": 0,
        "In Progress": 1,
        "Review": 2,
        "Done": 3
    }

    return (<GlobalContext.Provider
        value={{
            cross_axis_states,
            main_axis_states,
            main_axis_state_mapping,
            cross_axis_state_mapping
        }}>
        {children}
    </GlobalContext.Provider>)
}