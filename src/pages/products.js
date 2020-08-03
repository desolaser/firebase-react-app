import React, { useEffect, useState } from 'react'
import { useFirebase } from '../firebase'

import Layout from '../components/layout'
import ProductsList from '../components/products_list'
import StyledLink from '../components/styled_link'

const Products = props => {
    const firebase = useFirebase()
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        firebase.products().on('value', snapshot => {
            if (snapshot.val()) {
                const productsObject = snapshot.val()
                const productsList = Object.keys(productsObject).map(key => ({
                    id: key,
                    ...productsObject[key],
                }))
        
                setProducts(productsList)
                setLoading(false)
            }
        })

        return () => firebase.products().off()
    })

    return (
        <Layout>
            <h1>Products</h1>
            <StyledLink to="/add_budget">Add products</StyledLink>
            {loading && <div>Loading ...</div>} 
            <ProductsList history={props.history} data={products} />
        </Layout>
    )
}

export default Products