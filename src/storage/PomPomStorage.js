import { createStore, Reducer, Action } from "redux";
import { BreedTypes } from "../API/dogapi";

const initState = {
    query: "all"
}

const queryReducer = (state=initState , action) => {

    switch(action.type){
        case "CHANGE": return { query: BreedTypes[action.payload - 1] }
        default:return initState
    }

   


}

export const storage = createStore(queryReducer,initState)
