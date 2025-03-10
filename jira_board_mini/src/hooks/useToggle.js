import { useState } from "react"

export const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState)
    const toggle = (toggleToState) => {
        if (toggleToState !== undefined) {
            setState(toggleToState)
        } else {
            setState(!state)
        }
    }
    return [state, toggle]
}