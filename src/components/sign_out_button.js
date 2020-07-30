import React from 'react'
import { NavLink } from './nav_components'
import { useFirebase } from '../firebase'
 
const SignOutButton = () => {
    const firebase = useFirebase()

    const handleClick = () => {
        firebase.doSignOut()
        alert("You are logged out")
    }

    return (
        <NavLink onClick={handleClick}>
            Sign Out
        </NavLink>
    )
}
 
export default SignOutButton