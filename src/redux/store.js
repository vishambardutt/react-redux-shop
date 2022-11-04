import {createStore}  from 'redux';
// import iceCreamReducer from './iceCreams/iceCreamReducer';
import rootReducer from './rootReducer'

let store = createStore (rootReducer)



export default store;