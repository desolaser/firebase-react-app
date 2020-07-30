import React, { useState, useEffect } from 'react'
import { AuthContext } from './auth'
import { useFirebase } from '../firebase'

const AuthProvider = props => {
    const firebase = useFirebase()

    const existingTokens = JSON.parse(localStorage.getItem("tokens"))
    const userData = JSON.parse(localStorage.getItem("user"))
    const [authTokens, setAuthTokens] = useState(existingTokens)
    const [user, setUser] = useState(userData)

    useEffect(() => {
        firebase.auth.onAuthStateChanged(
            authUser => {
                authUser
                    ? setUser(authUser)
                    : setUser(null)
            }
        )
    })  
    
    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data))
        console.log(data)
        setAuthTokens(data)
    }

    const setUserData = (data) => {
        localStorage.setItem("user", JSON.stringify(data))
        console.log(data)
        setUser(data)
    }

    return (
        <AuthContext.Provider
            value={{
                authTokens, setAuthTokens: setTokens,
                user, setUser: setUserData
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider