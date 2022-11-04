import { BUY_CHOCOLATE } from "./ChocolateType"

let initialState = {
    numOfChocolate: 15
}

let ChocolateReducer = (state = initialState, action) => {
    switch (action.type){
        case BUY_CHOCOLATE:return{
            ...state,
            numOfChocolate: state.numOfChocolate -1
        }
        default: return state
    }
   
    }
    export default ChocolateReducer;