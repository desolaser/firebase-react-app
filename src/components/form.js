import React from 'react'

import {
    FormButton,
    FormTitle
} from './form_components'
import Panel from './panel'
import Input from './input'
import Select from './select'

const Form = ({ fields, handleSubmit, submitValue, title, disabled }) => {
    return (
        <Panel onSubmit={handleSubmit}>
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
            <FormButton disabled={disabled}>{submitValue}</FormButton>
        </Panel>
    )
}

export default Form