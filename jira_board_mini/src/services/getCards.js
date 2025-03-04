import mockApiResponse from "./mockApi_response.json"

export default async function getCardsAPI() {
    //mock an api call:
    let cachedCards = localStorage.getItem('cards')
    if(cachedCards !== null){
        cachedCards = cachedCards && JSON.parse(cachedCards)
        if(cachedCards && cachedCards.length > 0){
            console.log("Fetched cards from cache")
            return {cards: cachedCards, isCached: true}
        }
    }

    try{
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockApiResponse)
                console.log("Fetched cards from API")
            }, 1000)
        })
        const cards = response.initialTasks
        console.log(cards)
        localStorage.setItem('cards', JSON.stringify(cards))
        return {cards: cards, isCached: false}
    }
    catch(error){
        console.error("Error fetching cards:", error)
        return {cards: [], isCached: false}
    }
}