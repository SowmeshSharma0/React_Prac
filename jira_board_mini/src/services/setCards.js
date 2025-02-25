
export default async function setCardsAPI(cards) {
    try{
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                localStorage.setItem('cards', JSON.stringify(cards))
                resolve("Card set successfully")
            }, 1000)
        })
        return response
    }
    catch(error){
        console.error("Error setting card:", error)
        return "Error setting card"
    }
}