import React from 'react'
import { NavButton } from './nav_components'
import { useFirebase } from '../firebase'
import { useAuth } from '../auth'
 
const SignOutButton = () => {
    const firebase = useFirebase()
    const { setUser } = useAuth()

    const handleClick = () => {
        firebase.doSignOut()
        setUser(null)
        alert("You are logged out")
    }

    return (
        <NavButton onClick={handleClick}>
            Sign Out
        </NavButton>
    )
}
 
export default SignOutButton