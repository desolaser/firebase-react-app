import React from 'react'

import {
    FormContainer,
    FormButton,
    FormTitle
} from './styled_components'
import Input from 'components/input'
import Select from 'components/select'

const Form = ({ fields, handleSubmit, submitValue, title, disabled, display }) => {
    return (
        <FormContainer onSubmit={handleSubmit}>
            <center>
                <FormTitle>{title}</FormTitle>
            </center>
            {fields.map(field => 
                field.type === "select" 
                    ? (
                        <Select
                            key={`${field.label}${field.type}`}
                            label={field.label}
                            onChange={field.onChange}
                            value={field.value}
                            options={field.options}
                        />
                    )
                    : (
                        <Input
                            key={`${field.label}${field.type}`}
                            label={field.label}
                            type={field.type}
                            onChange={field.onChange}
                            value={field.value}
                        />
                    )
            )}
            {!display && <FormButton disabled={disabled}>{submitValue}</FormButton>}            
        </FormContainer>
    )
}

export default Form