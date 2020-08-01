import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AuthProvider from './auth'
import PrivateRoute from './components/private_route'

import Home from './pages/home'
import Account from './pages/account'
import Budgets from './pages/budgets'
import Products from './pages/products'
import Login from './pages/login'
import Register from './pages/register'
import PasswordReset from './pages/password_reset'
import PasswordChange from './pages/password_change'

function App() {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/password_reset" exact component={PasswordReset} />
                    <Route path="/password_change" exact component={PasswordChange} />
                    <PrivateRoute path="/budgets" exact component={Budgets} />
                    <PrivateRoute path="/products" exact component={Products} />
                    <PrivateRoute path="/account" exact component={Account} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App
