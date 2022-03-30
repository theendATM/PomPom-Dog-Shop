import { createStore, Reducer, Action } from "redux";

const BreedTypes = {
    0: "all",
    1: "germanshepherd",
    2: "shiba",
    3: "akita",
    4: "pomeranian"
}

const initState = {
    query: "all"
}

const queryReducer = (state = initState, action) => {
    switch (action.type) {
        case "овчарка":
            return { query: BreedTypes[1] }; break
        case "сиба-ину":
            return { query: BreedTypes[2] }; break
        case "акита-ину":
            return { query: BreedTypes[3] }; break
        case "шпиц":
            return { query: BreedTypes[4] }; break

        default:
            return { query: BreedTypes[0] }; break
    }
}

export const storage = createStore(queryReducer)
