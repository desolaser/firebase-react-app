import React from 'react'

import {
    FormControl,
    FormLabel,
    FormSelect
} from './form_components'

const Select = ({ label, onChange, value, options }) => {
    return (
        <FormControl>
            <FormLabel htmlFor="">{label}</FormLabel>
            <FormSelect onChange={onChange} value={value}>
                {options.map(item => <option value={item.id}>{item.name}</option>)}
            </FormSelect>
        </FormControl>
    )
}

export default Select