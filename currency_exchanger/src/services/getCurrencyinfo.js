
//returns a promise
export default async function getData(currency){
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    const resp = await fetch(url)
    const data = await resp.json()

    return data
}