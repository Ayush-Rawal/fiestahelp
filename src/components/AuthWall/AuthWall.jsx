import React from 'react'

let defaultAuth = {
    isAuthenticated: false,
    user: {
        name: "",
        isModerator: false
    },
    logout: () => {}
}

export let AuthContext = React.createContext(defaultAuth)

export function AuthWall({children}) {

    return (
            <AuthContext.Provider value={defaultAuth}>
                    {children}
            </AuthContext.Provider>            
    )
}
