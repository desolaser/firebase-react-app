import React from 'react'
import { useAuth } from '../auth'

import { 
    NavBar, 
    NavTitle, 
    NavList, 
    NavItem, 
    NavLink 
} from './nav_components'

import SignOutButton from './sign_out_button'

const Header = () => {
    const { user } = useAuth()

    return (
        <NavBar>
            <NavTitle color="white">
                Firebase example app
            </NavTitle>
            <NavList>
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                {
                    user ?
                    (
                        <>
                            <NavItem>
                                <NavLink to="/budgets">Budgets</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/products">Products</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/account">Account</NavLink>
                            </NavItem>
                            <NavItem>
                                <SignOutButton />
                            </NavItem>
                        </>
                    ) :
                    (
                        <>
                            <NavItem>
                                <NavLink to="/login">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/register">Register</NavLink>
                            </NavItem>
                        </>
                    )
                }
            </NavList>
        </NavBar>
    )
}

export default Header
