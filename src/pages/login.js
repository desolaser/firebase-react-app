import React, { useState } from 'react'
import { useFirebase } from '../firebase'
import { useAuth } from '../auth'
 
import Layout from '../components/layout'
import Form from '../components/form'
import Error from '../components/error'


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
            {error && <Error>{error.message}</Error>}
        </Layout>
    )
}

export default Login
