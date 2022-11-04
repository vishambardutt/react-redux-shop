import { BUY_CAKE } from "./CakeType"

let initialState = {
    numOfCake: 15
}

let CakeReducer = (state = initialState, action) => {
    switch (action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCake: state.numOfCake -1
        }
        default: return state
    }
   
    }
    export default CakeReducer;