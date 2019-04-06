import React from 'react'
import LoginSignup from '../LoginSignup'

let defaultAuth = {
    isAuthenticated: false,
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
                    (<LoginSignup />)
                )}
            </AuthContext.Consumer>            
    )
}
