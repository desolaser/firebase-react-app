import React from 'react'

import {
    FormContainer,
    FormButton,
    FormTitle
} from './form_components'
import Input from './input'

const Form = ({ fields, handleSubmit, submitValue, title }) => {
    return (
        <FormContainer onSubmit={handleSubmit}>
            <center>
                <FormTitle>Log in form</FormTitle>
            </center>
            {fields.map(field => {
                return (
                    <Input
                        key={`${field.label}${field.type}`}
                        label={field.label}
                        type={field.type}
                        onChange={field.onChange}
                        value={field.value}
                    />
                )
            })}
            <FormButton>{submitValue}</FormButton>
        </FormContainer>
    )
}

export default Form