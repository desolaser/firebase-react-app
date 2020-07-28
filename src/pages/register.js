import React, { useState } from 'react'
import { useFirebase } from '../firebase';

import Layout from '../components/layout'
import Form from '../components/form'


const Register = props => {
    const firebase = useFirebase()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repeatPassword, setRepeatPassword ] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
 
        firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {

                props.history.push("/");
            })
            .catch(error => {
                this.setState({ error })
            }) 
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
        {
            label: "Repeat password",
            type: "password",
            value: repeatPassword,
            onChange: e => setRepeatPassword(e.target.value)
        },
    ]

    return (
        <Layout>
            <Form fields={fields} handleSubmit={handleSubmit} submitValue="Sign Up" />
        </Layout>
    )
}

export default Register
