
export const addCardsAPI = async (batchOfCards) => {
    try{
        // const cardsToUpdate = JSON.parse(localStorage.getItem('cards'))
        // cardsToUpdate.push(card)
        // localStorage.setItem('cards', JSON.stringify(cardsToUpdate))
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Cards added successfully: ${batchOfCards}`)
            }, 1000)
        })
        return response
    }
    catch(error){
        console.error("Error adding cards:", error)
        return "Error adding cards"
    }
}

export const deleteCardsAPI = async (batchOfIds) => {
    try{
        // let cardsToUpdate = JSON.parse(localStorage.getItem('cards'))
        // cardsToUpdate = cardsToUpdate.filter(card => card.id !== delId)
        // localStorage.setItem('cards', JSON.stringify(cardsToUpdate))
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Cards deleted successfully: ${batchOfIds}`)
            }, 1000)
        })
        return response
    }
    catch(error){
        console.error("Error deleting cards:", error)
        return "Error deleting cards"
    }
}