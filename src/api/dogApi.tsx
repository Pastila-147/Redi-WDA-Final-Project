//get Dogs from public API https://dog.ceo/dog-api/
export async function getDogs() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random/12')

    if (!response.ok) {
        throw new Error('Error:No dogs today')
    }

    const data = await response.json()
    return data.message
}