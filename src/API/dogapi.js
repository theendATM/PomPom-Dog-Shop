export const getBreed = (breed) => `https://dog.ceo/api/breed/${breed}/images/random`

// 'all' HAS to be the first one and have index 0
export const BreedTypes = [
    "all",
    "germanshepherd",
    "pomeranian",
    "shiba",
    "akita",]

export const breedData = {
    "shiba": {
        name: "Сиба-Ину",
        cost: "40 000 ₽"
    },
    "akita": {
        name: "Акита-Ину",
        cost: "30 000 ₽"
    },
    "pomeranian": {
        name: "Шпиц",
        cost: "10 000 ₽"
    },
    "germanshepherd": {
        name: "Овчарка",
        cost: "100 000 ₽"
    },
}


export const getImage = async (breed) => {
    if (breed == "all"||breed==null) {

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


export const getRandomDog = async (breedToFetch = null) => {

    if (breedToFetch != null&&breedToFetch!="all") {
        var data = await getImage(breedToFetch)
        return { "breed": breedToFetch, "url": data.message }
    }
    else {
        const request = await fetch("https://dog.ceo/api/breeds/list")
        const data = await request.json()

        const msg = BreedTypes.slice(1, BreedTypes.length)
        const fetchedBreed = msg[Math.floor(Math.random() * msg.length)]

        const imgRequest = await fetch(`https://dog.ceo/api/breed/${fetchedBreed}/images/random`)
        const imgData = await imgRequest.json()

        return { "breed": fetchedBreed, "url": imgData.message }

    }
}
// to get a list of all breeds: https://dog.ceo/api/breeds/list
// to get a random pic of a specified breed: https://dog.ceo/api/breed/%BREED_NAME%/images/random