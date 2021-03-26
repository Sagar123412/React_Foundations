import React, {useState} from 'react'

function HooksCounter() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Clicked {count} Times</button>
        </div>
    )
}

export default HooksCounter
