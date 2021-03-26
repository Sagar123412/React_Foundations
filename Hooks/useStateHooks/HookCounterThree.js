import React, {useState} from 'react'

function HookCounterThree() {

    const [name, setName] = useState({firstName: '', lastName:''})

    return (
        <div>
            <input 
            type="text" 
            value={name.firstName} 
            onChange={e => setName({...name, firstName: e.target.value})}
            />

            <input 
            type="text" 
            value={name.lastName} 
            onChange = {e => setName({...name, lastName: e.target.value})}
            />

            <h1>your first name is: {name.firstName}</h1>
            <h1>your last name is: {name.lastName}</h1>
        </div>
    )
}

export default HookCounterThree
