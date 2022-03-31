import { createStore, Reducer, Action } from "redux";
import { BreedTypes } from "../API/dogapi";
import { combineReducers } from "redux";

const initState = {
    query: "all",
    login: false,
    signup: false
}

const queryReducer = (state = initState, action) => {

    switch (action.type) {
        case "CHANGE": return { query: BreedTypes[action.payload - 1], login: state.login, signup: state.signup }
        case "LOGIN": return { query: state.query, login: true, signup: false }
        case "SIGNUP": return { query: state.query, login: false, signup: true }
        default: return initState
    }




}

export const storage = createStore(queryReducer, initState)
