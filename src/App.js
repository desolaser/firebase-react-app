import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AuthContext from './auth'

import Home from './pages/home'
import Budgets from './pages/budgets'
import Products from './pages/products'
import Login from './pages/login'
import Register from './pages/register'

function App() {
    const [ user, setUser ] = useState({})

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/budgets" exact component={Budgets} />
                    <Route path="/products" exact component={Products} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                </Switch>
            </Router>
        </AuthContext.Provider>
    )
}

export default App
