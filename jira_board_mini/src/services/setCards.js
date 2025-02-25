
export const addCardAPI = async (card) => {
    try{
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                // localStorage.setItem('cards', JSON.stringify(cards))
                resolve("Card added successfully")
            }, 1000)
        })
        return response
    }
    catch(error){
        console.error("Error adding card:", error)
        return "Error adding card"
    }
}

export const deleteCardAPI = async (id) => {
    try{
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve("Card deleted successfully")
            }, 1000)
        })
        return response
    }
    catch(error){
        console.error("Error deleting card:", error)
        return "Error deleting card"
    }
}