import mockApiResponse from "./mockApi_response.json"

export const getCards = async () => {
    //mock an api call:
    try{
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(mockApiResponse)
            }, 1000)
        })
        return response.tasks
    }
    catch(error){
        console.error("Error fetching cards:", error)
        return []
    }
}

export default getCards