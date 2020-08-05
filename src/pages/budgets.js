import React, { useEffect, useState } from 'react'
import { useFirebase } from '../firebase'

import Layout from '../components/layout'
import BudgetsList from '../components/budgets_list'
import StyledLink from '../components/styled_link'

const Budgets = ({ history }) => {
    const firebase = useFirebase()

    const [ budgets, setBudgets ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        firebase.budgets().on('value', snapshot => {
            if (snapshot.val()) {
                const budgetsObject = snapshot.val()
                const budgetsList = Object.keys(budgetsObject).map(key => ({
                    id: key,
                    ...budgetsObject[key],
                }))
        
                setBudgets(budgetsList)
                setLoading(false)
            }
        })

        return () => firebase.budgets().off()
    })

    return (
        <Layout>
            <h1>Budgets</h1>
            <StyledLink to="/add_budget">Add budget</StyledLink>
            {loading && <div>Loading ...</div>} 
            <BudgetsList data={budgets} history={history} />
        </Layout>
    )
}

export default Budgets