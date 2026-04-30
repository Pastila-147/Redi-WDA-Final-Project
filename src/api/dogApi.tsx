//get Dogs from public API
export async function getDogs() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random/10')

    if (!response.ok) {
        throw new Error('Error:No dogs today')
    }

    const data = await response.json()
    return data.message
}