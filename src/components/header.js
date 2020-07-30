import React from 'react'

import { 
    NavBar, 
    NavTitle, 
    NavList, 
    NavItem, 
    NavLink 
} from './nav_components'

import SignOutButton from './sign_out_button'

const Header = () => {
    return (
        <NavBar>
            <NavTitle color="white">
                Firebase example app
            </NavTitle>
            <NavList>
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/register">register</NavLink>
                </NavItem>
                <NavItem>
                    <SignOutButton />
                </NavItem>
            </NavList>
        </NavBar>
    )
}

export default Header
