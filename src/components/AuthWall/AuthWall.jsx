import React, { useState } from "react";

let defaultAuth = {
  isAuthenticated: false,
  user: {
    name: "",
    isModerator: false
  }
};

export let AuthContext = React.createContext(defaultAuth);

export function AuthWall({ children }) {
  const [auth, setAuth] = useState(defaultAuth);
  function logout() {
    setAuth(defaultAuth);
  }
  function setUser(name, isModerator) {
    setAuth({
      isAuthenticated: true,
      user: {
          name,
          isModerator
      }
    });
  }
  return (
    <AuthContext.Provider
      value={{
        ...auth,
        logout,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
