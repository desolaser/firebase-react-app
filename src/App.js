import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AuthProvider from './auth'
import PrivateRoute from './components/private_route'

import Home from './pages/home'
import Budgets from './pages/budgets'
import Products from './pages/products'
import Login from './pages/login'
import Register from './pages/register'

function App() {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <PrivateRoute path="/budgets" exact component={Budgets} />
                    <PrivateRoute path="/products" exact component={Products} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App
