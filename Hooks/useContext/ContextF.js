import React from 'react'
import { Usercontext } from '../..'

function ComponentF() {
    return (
        <div>
            <Usercontext.Consumer>
                {
                    user => {
                        return <div>User Context value is {user} </div>
                    }
                }
            </Usercontext.Consumer>
        </div>
    )
}

export default ComponentF
