import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AuthProvider from './auth'
import PrivateRoute from './utils/private_route'

import Home from './pages/home'
import Account from './pages/account'
import Budgets from './pages/budgets'
import Products from './pages/products'
import AddBudget from './pages/add_budget'
import AddProduct from './pages/add_product'
import EditProduct from './pages/edit_product'
import EditBudget from './pages/edit_budget'
import Login from './pages/login'
import Register from './pages/register'
import PasswordReset from './pages/password_reset'
import PasswordChange from './pages/password_change'
import Admin from './pages/admin'

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
                    <PrivateRoute path="/add_budget" exact component={AddBudget} />
                    <PrivateRoute path="/edit_budget/:id" exact component={EditBudget} />
                    <PrivateRoute path="/products" exact component={Products} />
                    <PrivateRoute path="/add_product" exact component={AddProduct} />
                    <PrivateRoute path="/edit_product/:id" exact component={EditProduct} />
                    <PrivateRoute path="/account" exact component={Account} />
                    <PrivateRoute path="/admin" exact component={Admin} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App
