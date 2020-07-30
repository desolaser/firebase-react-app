import React, { useState } from 'react'
import { useFirebase } from '../firebase'
 
import Layout from '../components/layout'
import Form from '../components/form'


const Login = () => {
    const firebase = useFirebase()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ error, setError ] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        firebase.
            doSignInWithEmailAndPassword(email, password)
            .then(authUser => {
                setEmail('')
                setPassword('')
                alert("You are logged in")
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
            {error && <p>{error.message}</p>}
        </Layout>
    )
}

export default Login
