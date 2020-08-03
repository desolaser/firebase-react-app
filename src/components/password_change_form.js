import React, { useState } from 'react'
import queryString from 'query-string'
import { useFirebase } from '../firebase'
 
import Form from '../components/form'
import Alert from '../components/alert'

const PasswordChangeForm = props => {
    const firebase = useFirebase()
    const [ password, setPassword ] = useState('')
    const [ repeatPassword, setRepeatPassword ] = useState('')
    const [ error, setError ] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (props.user) {            
            firebase
                .doPasswordUpdate(password)
                .then(authUser => {
                    setPassword('')
                    setRepeatPassword('')
                    alert("Your password has been changed, you should be able to log in with the new password")
                })
                .catch(error => {
                    setError(error)
                })
        } else {
            let url = props.location.search
            let params = queryString.parse(url)
    
            firebase
                .confirmPasswordReset(params.oobCode, password)
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
    }

    const isInvalid = password !== repeatPassword || password === ''

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
        <>
            <Form 
                title="Password change"
                fields={fields}
                handleSubmit={handleSubmit}
                submitValue="Change password"
                disabled={isInvalid}
            />
            {error && <Alert>{error.message}</Alert>}
        </>
    )
}

export default PasswordChangeForm
