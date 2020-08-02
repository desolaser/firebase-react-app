import React, { useState } from 'react'
import { useFirebase } from '../firebase'
 
import Layout from '../components/layout'
import Form from '../components/form'

const AddProduct = () => {
    const firebase = useFirebase()
    const [ name, setName ] = useState('')
    const [ price, setPrice ] = useState(0)

    const handleSubmit = e => {
        e.preventDefault()

        firebase.products().push({
            name,
            price
        })
        alert('Product added')
    }

    const isInvalid = name === '' || price === 0

    const fields = [
        {
            label: "Name",
            type: "text",
            value: name,
            onChange: e => setName(e.target.value)
        },
        {
            label: "Price",
            type: "number",
            value: price,
            onChange: e => setPrice(e.target.value)
        },
    ]

    return (
        <Layout>
            <Form 
                title="Product form"
                fields={fields}
                handleSubmit={handleSubmit}
                submitValue="Submit"
                disabled={isInvalid}
            />
        </Layout>
    )
}

export default AddProduct
