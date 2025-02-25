import mockApiResponse from "./mockApi_response.json"

export default async function getCardsAPI() {
    //mock an api call:
    const cachedCards = localStorage.getItem('cards')
    if(cachedCards){
        return JSON.parse(cachedCards)
    }

    try{
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockApiResponse)
            }, 1000)
        })
        const cards = response.initialTasks
        console.log(cards)
        localStorage.setItem('cards', JSON.stringify(cards))
        return cards
    }
    catch(error){
        console.error("Error fetching cards:", error)
        return []
    }
}