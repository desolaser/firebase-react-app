import React, { useEffect, useState } from 'react'
import { useFirebase } from '../firebase'

import Layout from '../components/layout'
import StyledList from '../components/styled_list'

const Products = () => {
    const firebase = useFirebase()

    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        firebase.products().on('value', snapshot => {
            const productsObject = snapshot.val()
            const productsList = Object.keys(productsObject).map(key => ({
                id: key,
                ...productsObject[key],
            }))
    
            setProducts(productsList)
            setLoading(false)
        })

        return () => firebase.products().off()
    })

    return (
        <Layout>
            <h1>Products</h1>
            {loading && <div>Loading ...</div>} 
            <StyledList data={products} />
        </Layout>
    )
}

export default Products