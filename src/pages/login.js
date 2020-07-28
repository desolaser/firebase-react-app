import React, { useState } from 'react'

import Layout from '../components/layout'
import Form from '../components/form'


const Login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log(email, password)
    }

    const fields = [
        {
            label: "Email",
            type: "text",
            value: email,
            onChange: e => setEmail(e.target.value)
        },
        {
            label: "Password",
            type: "password",
            value: password,
            onChange: e => setPassword(e.target.value)
        },
    ]

    return (
        <Layout>
            <Form fields={fields} handleSubmit={handleSubmit} submitValue="Log In" />
        </Layout>
    )
}

export default Login
