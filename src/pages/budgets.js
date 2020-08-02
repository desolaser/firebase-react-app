import React, { useEffect, useState } from 'react'
import { useFirebase } from '../firebase'

import Layout from '../components/layout'
import StyledList from '../components/styled_list'

const Budgets = () => {
    const firebase = useFirebase()

    const [ budgets, setBudgets ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        firebase.budgets().on('value', snapshot => {
            const budgetsObject = snapshot.val()
            const budgetsList = Object.keys(budgetsObject).map(key => ({
                id: key,
                ...budgetsObject[key],
            }))
    
            setBudgets(budgetsList)
            setLoading(false)
        })

        return () => firebase.budgets().off()
    })

    return (
        <Layout>
            <h1>Budgets</h1>
            {loading && <div>Loading ...</div>} 
            <StyledList data={budgets} />
        </Layout>
    )
}

export default Budgets