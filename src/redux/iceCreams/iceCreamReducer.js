import { BUY_ICECREAM } from "./iceCreamType"

let initialState = {
    numOficeCream: 10
}

let iceCreamReducer = (state = initialState, action) => {
    switch (action.type){
        case BUY_ICECREAM:return{
            ...state,
            numOficeCream: state.numOficeCream -1
        }
        default: return state
    }
   
    }
    export default iceCreamReducer;