import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useAuth } from '../auth'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = useAuth()
    console.log(auth)
    return (
        <Route 
            {...rest}
            render={props => 
                auth.user ? (
                    <Component {...props} />
                ) :
                (
                    <Redirect to="/login" />
                )
            } 
        />
    )
}

export default PrivateRoute