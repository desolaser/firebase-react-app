import React, { useState, useEffect } from 'react'
import { useFirebase } from '../firebase'
import * as _ from 'lodash'
 
import Layout from '../components/layout'
import Form from '../components/form'
import Input from '../components/input'
import Panel from '../components/panel'
import StyledList from '../components/styled_list'
import { FormTitle } from '../components/form_components'

const EditBudget = ({ match }) => {
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

                productsList.unshift({
                    id: 0,
                    value: "",
                    name: "Select a product"
                });
        
                setProducts(productsList)
            } else {
                setProducts([])
            }
        })

        firebase.budget(match.params.id).once("value").then(snapshot => {
            if (snapshot.val()) {
                const budget = snapshot.val()
                setCompany(budget.company)
                setContact(budget.contact)
                setBudgetProducts(budget.products)
                setSum(budget.sum)
                setTaxes(budget.taxes)
                setTotal(budget.total)
            }
        }).catch(error => {
            console.log("error".error)
        })

        return () => {
            firebase.products().off()
            firebase.budget().off()
        }
    }, [])

    const handleBudgetSubmit = e => {
        e.preventDefault()

        firebase.budget(match.params.id).update({
            'company': company,
            'contact': contact,
            'products': budgetProducts,
            'sum': sum,
            'taxes': taxes,
            'total': total
        })

        alert('Budget updated')
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
            const checkProduct = _.find(budgetProducts, item => item.id === selectedProduct)
            if (checkProduct) {
                const newBudgetProducts = budgetProducts.map(item => {
                    if(item.id === product.id) {
                        item.quantity = parseInt(item.quantity, 10) + parseInt(product.quantity, 10)
                    }
                    return item
                });

                setBudgetProducts(newBudgetProducts)
            } else {
                setBudgetProducts([...budgetProducts,  product])
            }
            setSum(sum + (product.price * quantity))
            setTaxes((sum + (product.price * quantity)) * 0.19)
            setTotal(sum + (product.price * quantity) + (sum + (product.price * quantity)) * 0.19)
        }).catch(error => {
            console.log("error".error)
        })
    }

    const deleteBudgetProduct = product_id => {
        const product = _.find(budgetProducts, product => product.id === product_id)
        setSum(sum - (product.price * product.quantity))
        setTaxes((sum - (product.price * product.quantity)) * 0.19)
        setTotal(sum - (product.price * product.quantity) + (sum - (product.price * product.quantity)) * 0.19)
        const newBudgetProducts = _.filter(budgetProducts, product => product.id !== product_id)
        setBudgetProducts(newBudgetProducts)
    }

    const isInvalid = company === '' || contact === '' || sum === 0
    const isInvalidProducts = selectedProduct === '' || quantity === 0

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

    const buttons = [
        {
            text: "Delete",
            color: "tomato",
            textColor: "white",
            onClick: e => deleteBudgetProduct(e.target.dataset.id)
        },
    ]

    return (
        <Layout>
            <Panel>
                <center>
                    <FormTitle>Company data</FormTitle>
                </center>
                <Input label="Company" type="text" value={company} onChange={e => setCompany(e.target.value)} />
                <Input label="Contact" type="text" value={contact} onChange={e => setContact(e.target.value)} />
            </Panel>
            <Form 
                title="Add product to the budget"
                fields={product_fields}
                handleSubmit={handleProductSubmit}
                submitValue="Add"
                disabled={isInvalidProducts}
            />
            <StyledList data={budgetProducts} buttons={buttons} />
            <Form 
                title="Calculations"
                fields={display_fields}
                handleSubmit={handleBudgetSubmit}
                submitValue="Submit budget"
                disabled={isInvalid}
            />
        </Layout>
    )
}

export default EditBudget
