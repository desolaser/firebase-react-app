import React, { useState } from 'react'
import { useFirebase } from '../firebase'
 
import Layout from '../components/layout'
import Form from '../components/form'
import Error from '../components/error'


const PasswordReset = props => {
    const firebase = useFirebase()
    const [ email, setEmail ] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        firebase
            .doPasswordReset(email)
            .then(authUser => {
                setEmail('')
                props.history.push("/password_change")
            })
            .catch(error => {
                setError(error)
            })
    }

    const isInvalid = email === ''

    const fields = [
        {
            label: "Email",
            type: "text",
            value: email,
            onChange: e => setEmail(e.target.value)
        }
    ]

    return (
        <Layout>
            <Form 
                title="Password reset"
                fields={fields}
                handleSubmit={handleSubmit}
                submitValue="Send Email"
                disabled={isInvalid}
            />
            {error && <Error message={error.message} />}
        </Layout>
    )
}

export default PasswordReset