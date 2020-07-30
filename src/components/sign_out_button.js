import React from 'react'
import { NavButton } from './nav_components'
import { useFirebase } from '../firebase'
 
const SignOutButton = () => {
    const firebase = useFirebase()

    const handleClick = () => {
        firebase.doSignOut()
        alert("You are logged out")
    }

    return (
        <NavButton onClick={handleClick}>
            Sign Out
        </NavButton>
    )
}
 
export default SignOutButton