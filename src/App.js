import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import Budgets from './pages/budgets'
import Products from './pages/products'
import Login from './pages/login'
import Register from './pages/register'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/budgets" exact component={Budgets} />
                <Route path="/products" exact component={Products} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
            </Switch>
        </Router>
    )
}

export default App
