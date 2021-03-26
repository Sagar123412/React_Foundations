//using multiple useReducer because we have the need for same states and the same reducer function as previous one.


import React, {useReducer} from 'react'


const initialState = 0
function reducer(state, action){
    switch(action){
        case'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function CounterMultipleReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick = {() => dispatch('increment')}>Increment</button>
            <button onClick = {() => dispatch('decrement')}>Decrement</button>
            <button onClick = {() => dispatch('reset')}>Reset</button>
            <div>
                <h1>Count: {count2}</h1>
                <button onClick = {() => dispatch2('increment')}>Increment</button>
                <button onClick = {() => dispatch2('decrement')}>Decrement</button>
                <button onClick = {() => dispatch2('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default CounterMultipleReducer
