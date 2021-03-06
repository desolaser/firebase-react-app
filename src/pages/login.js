import React, { useState } from 'react'
import { useFirebase } from 'firebase_context'
import { useAuth } from 'auth'
 
import Layout from 'components/layout'
import Form from 'components/form'
import Alert from 'components/alert'
import StyledLink from 'components/styled_link'


const Login = props => {
    const firebase = useFirebase()
    const { setUser } = useAuth()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(authUser => {
                setEmail('')
                setPassword('')
                setUser(authUser)
                alert("You are logged in")
                props.history.push("/budgets")
            })
            .catch(error => {
                setError(error)
            })
    }

    const isInvalid = email === '' || password === ''

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
            <Form 
                title="Log in form"
                fields={fields}
                handleSubmit={handleSubmit}
                submitValue="Log In"
                disabled={isInvalid}
            />
            <StyledLink to="/password_reset">Forgot your password? Click here</StyledLink>
            {error && <Alert>{error.message}</Alert>}
        </Layout>
    )
}

export default Login
