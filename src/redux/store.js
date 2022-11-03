import {createStore}  from 'redux';
import iceCreamReducer from './iceCreams/iceCreamReducer';

let store = createStore (iceCreamReducer)



export default store;