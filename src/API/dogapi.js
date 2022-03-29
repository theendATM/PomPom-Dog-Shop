const url="https://dog.ceo/api/breed/samoyed/images/random"

export const getImage = async () => {
    const request = await fetch(url)

    const data = await request.json()

    return data
}
// to get a list of all breeds: https://dog.ceo/api/breeds/list
// to get a random pic of a specified breed: https://dog.ceo/api/breed/%BREED_NAME%/images/random