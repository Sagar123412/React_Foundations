// If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, 
//componentDidUpdate, and componentWillUnmount combined.
//conditionally run a effect

import React, {useState, useEffect} from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect- Updating document title')
        document.title = `clicked ${count} times`
    }, [count])

    return ( 
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
           <button onClick = {() => setCount(count + 1 )}>clicked {count} times</button> 
        </div>
    )
}

export default HookCounterOne
