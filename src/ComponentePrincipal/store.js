import { legacy_createStore } from "redux"
import { combineReducers } from "redux"
import aleatorioReducer from "./reducer"

const reducers = combineReducers({
    aleatorioReducer
});

const store = legacy_createStore (
    reducers
)

export default store