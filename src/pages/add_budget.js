import React, { useState, useEffect } from 'react'
import { useFirebase } from '../firebase'
 
import Layout from '../components/layout'
import Form from '../components/form'
import Input from '../components/input'
import StyledList from '../components/styled_list'

const AddBudget = () => {
    const firebase = useFirebase()
    
    const [ company, setCompany ] = useState('')
    const [ contact, setContact ] = useState('')
    const [ budgetProducts, setBudgetProducts ] = useState([])
    const [ sum, setSum ] = useState(0)
    const [ taxes, setTaxes ] = useState(0)
    const [ total, setTotal ] = useState(0)

    const [ selectedProduct, setSelectedProduct ] = useState(0)
    const [ quantity, setQuantity ] = useState(0)
    const [ products, setProducts ] = useState([])
    
    useEffect(() => {
        firebase.products().on('value', snapshot => {
            if (snapshot.val()) {
                const productsObject = snapshot.val()
                const productsList = Object.keys(productsObject).map(key => ({
                    id: key,
                    ...productsObject[key],
                }))
        
                setProducts(productsList)
            }
        })

        return () => firebase.products().off()
    })

    const handleBudgetSubmit = e => {
        e.preventDefault()

        firebase.budgets().push({
            company,
            contact,
            sum,
            taxes,
            total,
            products: budgetProducts
        })
    }

    const handleProductSubmit = e => {
        e.preventDefault()
        firebase.product(selectedProduct).once("value").then(snapshot => {
            const product = {
                id: selectedProduct,
                name: snapshot.val().name,
                price: snapshot.val().price,
                quantity
            }
            setBudgetProducts([...budgetProducts,  product])
            setSum(sum + (product.price * quantity))
            setTaxes((sum + (product.price * quantity)) * 0.19)
            setTotal(sum + (product.price * quantity) + (sum + (product.price * quantity)) * 0.19)
        }).catch(error => {
            console.log("error".error)
        })
    }

    const isInvalid = company === '' || contact === '' || sum === 0
    const isInvalidProducts = selectedProduct === '' || quantity === 0

    const fields = [
        {
            label: "Company",
            type: "text",
            value: company,
            onChange: e => setCompany(e.target.value)
        },
        {
            label: "Contact",
            type: "text",
            value: contact,
            onChange: e => setContact(e.target.value)
        },
    ]

    const product_fields = [
        {
            label: "Product",
            type: "select",
            value: selectedProduct,
            options: products,
            onChange: e => setSelectedProduct(e.target.value)
        },
        {
            label: "Quantity",
            type: "number",
            value: quantity,
            options: [],
            onChange: e => setQuantity(e.target.value)
        }
    ]

    const display_fields = [
        {
            label: "Sum",
            type: "number",
            value: sum
        },
        {
            label: "Taxes",
            type: "number",
            value: taxes
        },
        {
            label: "Total",
            type: "number",
            value: total
        }
    ]

    return (
        <Layout>
            <Form 
                title="Budget form"
                fields={fields}
                handleSubmit={handleBudgetSubmit}
                submitValue="Submit"
                disabled={isInvalid}
            />
            <Form 
                title="Add product to the budget"
                fields={product_fields}
                handleSubmit={handleProductSubmit}
                submitValue="Add"
                disabled={isInvalidProducts}
            />
            <StyledList data={budgetProducts} />
            <Form 
                title="Calculations"
                fields={display_fields}
                display
            />
        </Layout>
    )
}

export default AddBudget
