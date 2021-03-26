//An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)
//it uses javascript array.reduce().


import React, {useReducer} from 'react'


const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

function reducer(state, action){
    switch(action.type){
        case'increment':
            return { ...state, firstCounter: state.firstCounter + action.value};
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value};
        case'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value};
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function CounterTwoReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Count: {count.firstCounter}</h1>
            <h1>Count: {count.secondCounter}</h1>
            <button onClick = {() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick = {() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button onClick = {() => dispatch({type: 'increment', value: 5})}>Increment By 5</button>
            <button onClick = {() => dispatch({type: 'decrement', value: 5})}>Decrement by 5</button>
            <button onClick = {() => dispatch({type: 'reset'})}>Reset</button>

            <div>
            <button onClick = {() => dispatch({type: 'increment2', value: 1})}>Increment 2</button>
            <button onClick = {() => dispatch({type: 'decrement2', value: 1})}>Decrement 2</button>
            </div>
        </div>
    )
}

export default CounterTwoReducer
