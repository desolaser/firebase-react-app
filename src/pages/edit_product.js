import React, { useState, useEffect } from 'react'
import { useFirebase } from 'firebase_context'
 
import Layout from 'components/layout'
import Form from 'components/form'

const EditProduct = ({ match }) => {
    const firebase = useFirebase()
    const [ name, setName ] = useState('')
    const [ price, setPrice ] = useState(0)

    useEffect(() => {
        firebase.product(match.params.id).once('value', snapshot => {
            if (snapshot.val()) {
                const product = snapshot.val()
                setName(product.name)
                setPrice(product.price)
            }
        })

        return () => firebase.products().off()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        firebase.product(match.params.id).update({
            'name': name,
            'price': price
        })
        alert('Product edited')
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
                title="Product edit form"
                fields={fields}
                handleSubmit={handleSubmit}
                submitValue="Submit"
                disabled={isInvalid}
            />
        </Layout>
    )
}

export default EditProduct
