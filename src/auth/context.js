import React, { useContext } from 'react'
const AuthContext = React.createContext(null)

const useAuth = () => {
    return useContext(AuthContext)
}

export default AuthContext
export { useAuth }