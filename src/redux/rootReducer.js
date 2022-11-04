import { combineReducers } from "redux";
import CakeReducer from "./Cake/CakeReducer";
import ChocolateReducer from "./Chocolate/ChocolateReducer";
import iceCreamReducer from "./iceCreams/iceCreamReducer";

let rootReducer = combineReducers({
    Cake:CakeReducer,
    Choco: ChocolateReducer,
    Ice: iceCreamReducer
})

export default rootReducer;