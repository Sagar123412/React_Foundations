//An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)
//it uses javascript array.reduce().


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

function CounterReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick = {() => dispatch('increment')}>Increment</button>
            <button onClick = {() => dispatch('decrement')}>Decrement</button>
            <button onClick = {() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterReducer
