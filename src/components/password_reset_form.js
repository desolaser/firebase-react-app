import React, { useState } from 'react'
import { useFirebase } from '../firebase'
 
import Form from '../components/form'
import Alert from '../components/alert'

const PasswordResetForm = () => {
    const firebase = useFirebase()
    const [ email, setEmail ] = useState('')
    const [ error, setError ] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        firebase
            .doPasswordReset(email)
            .then(authUser => {
                setEmail('')
                alert('We have sent an email with the password change link to your email account')
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
        <>
            <Form 
                title="Password reset"
                fields={fields}
                handleSubmit={handleSubmit}
                submitValue="Send Email"
                disabled={isInvalid}
            />
            {error && <Alert>{error.message}</Alert>}
        </>
    )
}

export default PasswordResetForm
