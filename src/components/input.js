import React from 'react'

import {
    FormControl,
    FormLabel,
    FormInput
} from 'components/form'

const Input = ({ label, type, onChange, value }) => {
    return (
        <FormControl>
            <FormLabel htmlFor="">{label}</FormLabel>
            <FormInput type={type} onChange={onChange} value={value}/>
        </FormControl>
    )
}

export default Input