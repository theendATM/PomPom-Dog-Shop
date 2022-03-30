export const DOG_URL = "https://dog.ceo/api/breed/samoyed/images/random"

export const getBreed = (breed) => `https://dog.ceo/api/breed/${breed}/images/random`

export const getImage = async (breed) => {

    if (breed == "all") {
        const request = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await request.json()

        return data
    }

    else {
        const request = await fetch(getBreed(breed))

        const data = await request.json()

        return data
    }
}
// to get a list of all breeds: https://dog.ceo/api/breeds/list
// to get a random pic of a specified breed: https://dog.ceo/api/breed/%BREED_NAME%/images/random