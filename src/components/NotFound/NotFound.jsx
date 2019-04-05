import React from 'react'
import {Link} from '@reach/router'

export function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <h2>You've wandered into the Abyss</h2>
            <Link to="/">Go back Home</Link>
        </div>
    )
} 