import React, { useState } from 'react'
import { useFirebase } from '../firebase'

import Layout from '../components/layout'
import Form from '../components/form'
import Error from '../components/error'

const Register = props => {
    const firebase = useFirebase()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repeatPassword, setRepeatPassword ] = useState('')
    const [ error, setError ] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
 
        firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                setEmail('')
                setPassword('')
                setRepeatPassword('')
                props.history.push("/login")
                alert("Registration successful, you can log in now")
            })
            .catch(error => {
                setError(error)
            }) 
    }

    const isInvalid =
        password !== repeatPassword ||
        password === '' ||
        email === ''

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
        {
            label: "Repeat password",
            type: "password",
            value: repeatPassword,
            onChange: e => setRepeatPassword(e.target.value)
        },
    ]

    return (
        <Layout>
            <Form 
                title="Register form"
                fields={fields}
                handleSubmit={handleSubmit}
                submitValue="Sign Up"
                disabled={isInvalid}
            />
            {error && <Error message={error.message} />}
        </Layout>
    )
}

export default Register
