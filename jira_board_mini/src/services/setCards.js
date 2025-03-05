
export const addCardAPI = async (card) => {
    try{
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve("Card added successfully", card)
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
                resolve("Card deleted successfully", id)
            }, 1000)
        })
        return response
    }
    catch(error){
        console.error("Error deleting card:", error)
        return "Error deleting card"
    }
}

export const updateCardAPI = async (card) => {
    try{
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve("Card updated successfully", card)
            }, 1000)
        })
        return response
    }
    catch(error){
        console.error("Error updating card:", error)
        return "Error updating card"
    }
}