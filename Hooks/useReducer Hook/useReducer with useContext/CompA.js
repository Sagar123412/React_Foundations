import React, {useContext} from 'react'

import { UserContext } from './RuducerWithContext'

//importing useContext hook from Root component


function CompA() {
    const haveContext = useContext(UserContext)

    return (
        <UserContext.Consumer>
            <div>
                <h1>Count: {haveContext.countState}</h1>
                <button onClick = {() => haveContext.countDispatch('increment')}>Increment</button>
                <button onClick = {() => haveContext.countDispatch('decrement')}>Decrement</button>
                <button onClick = {() => haveContext.countDispatch('reset')}>Reset</button>
            </div>
        </UserContext.Consumer>
    )
}

export default CompA
