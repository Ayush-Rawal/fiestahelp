import React, {useState, useEffect} from 'react'

let defaultAuth = {
    isAuthenticated: true,
    provider: "",
    user: {},
    logout: () => {}
}

export let AuthContext = React.createContext(defaultAuth)

export function AuthWall({children, ...rest}) {

    return (
            <AuthContext.Consumer>
                {value => (
                    value.isAuthenticated?
                    children
                    :
                    <LoginSignup />
                )}
            </AuthContext.Consumer>            
    )
}

function LoginSignup () {
    return (
        <div>
            login or signup
        </div>
    )
}

