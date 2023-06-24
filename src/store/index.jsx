//TOOLKIT 
//to keep the code clean i am separating the logic
import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';


const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;


// NO TOOLKIT VERSION
// import { createStore } from 'redux';

// //to have a clean code; you could even add these in a separate file and then import them; also check out redux toolkit https://redux-toolkit.js.org/
// const initialState = { counter: 0, showCounter: false };
// export const INCREMENT = 'increment';
// export const INCREASE = 'increase';
// export const DECREMENT = 'decrement';
// export const TOGGLE = 'toggle';

// const counterReducer = (state = initialState, action) => {
//         //never mutate the existing state like this, always copy and create new objects, more on the topic here https://academind.com/tutorials/reference-vs-primitive-values/
//         // state.counter++;
//         // return state;
//     if (action.type === INCREMENT) {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     } else if (action.type === INCREASE) {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     } else if (action.type === DECREMENT) {
//         return {
//             counter: state.counter -1,
//             showCounter: state.showCounter
//         }
//     } else if (action.type === TOGGLE) {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }

//     return state;
// }   

// //The current Redux application state lives in an object called the store
// //The store is created by passing in a reducer, and has a method called getState that returns the current state value
// const store = createStore(counterReducer);

// export default store;
