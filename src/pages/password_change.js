import React, { useState } from 'react'
import { useFirebase } from '../firebase'
 
import Layout from '../components/layout'
import Form from '../components/form'
import Error from '../components/error'


const PasswordChange = props => {
    const firebase = useFirebase()
    const [ password, setPassword ] = useState('')
    const [ repeatPassword, setRepeatPassword ] = useState('')
    const [ error, setError ] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        firebase
            .doPasswordUpdate(password)
            .then(authUser => {
                setPassword('')
                setRepeatPassword('')
                alert("Your password has been changed, you should be able to log in with the new password")
                props.history.push("/login")
            })
            .catch(error => {
                setError(error)
            })
    }

    const isInvalid = password === repeatPassword || password === ''

    const fields = [
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
        }
    ]

    return (
        <Layout>
            <Form 
                title="Password change"
                fields={fields}
                handleSubmit={handleSubmit}
                submitValue="Change password"
                disabled={isInvalid}
            />
            {error && <Error message={error.message} />}
        </Layout>
    )
}

export default PasswordChange
