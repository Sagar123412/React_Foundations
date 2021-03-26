//Using usereducer with useContext to share stats into components in the hierarchy


import React, {useReducer} from 'react'
import CompA from './CompA'
import CompB from './CompB'
import CompC from './CompC'

//creting useContext hook
export const UserContext = React.createContext()

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

function ReducerWithContext() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <UserContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <div>
           <CompA />
           <CompB />
           <CompC />
        </div>
        </UserContext.Provider>
    )
}

export default ReducerWithContext
