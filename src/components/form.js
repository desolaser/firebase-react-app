import React from 'react'

import {
    FormContainer,
    FormButton,
    FormTitle
} from './form_components'
import Input from './input'

const Form = ({ fields, handleSubmit, submitValue, title, disabled }) => {
    return (
        <FormContainer onSubmit={handleSubmit}>
            <center>
                <FormTitle>{title}</FormTitle>
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
            <FormButton disabled={disabled}>{submitValue}</FormButton>
        </FormContainer>
    )
}

export default Form