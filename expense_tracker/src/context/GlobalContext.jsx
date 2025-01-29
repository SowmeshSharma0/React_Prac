import { createContext, useState } from "react";

export const ListContext = createContext()
export const FormContext = createContext()

//provider component:
export const ListProvider = ({children}) => {
    const [TransList, setTransList] = useState([])
    const [isOpenItems, setIsOpenItems] = useState([])
    const [isExpanded, setIsExpanded] = useState(false)

    const addToList = (item) => {
        console.log("Adding to list")
        console.log(item)
    
        setTransList(prevList => [...prevList, item])
        setIsExpanded(true)
    }

    const toggleItemOpen = (toggleID) => {
        console.log(toggleID)
        setIsOpenItems(prevState => {
            const newState = {...prevState}
            newState[toggleID] = !newState[toggleID]
            return newState
        })
    }

    return (
        <ListContext.Provider 
            value={{
                TransList, 
                setTransList, 
                isExpanded, 
                setIsExpanded, 
                isOpenItems, 
                setIsOpenItems, 
                addToList,
                toggleItemOpen
            }}
        >
            {children}
        </ListContext.Provider>
    )
}

export const FormProvider = ({children}) => {
    const [FormData, setFormData] = useState({title:"", amount:0, description: ""})

    return (
        <FormContext.Provider 
            value={{
                FormData, 
                setFormData
            }}
        >
            {children}
        </FormContext.Provider>
    )
}