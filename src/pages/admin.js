import React, { useEffect, useState } from 'react'
import { useFirebase } from 'firebase_context'

import Layout from 'components/layout'
import StyledList from 'components/styled_list'

const Admin = () => {
    const firebase = useFirebase()

    const [ users, setUsers ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val()
            const usersList = Object.keys(usersObject).map(key => ({
                uid: key,
                ...usersObject[key],
            }))
    
            setUsers(usersList)
            setLoading(false)
        })

        return () => firebase.users().off()
    })

    return (
        <Layout>
            <h1>Admin</h1>
            {loading && <div>Loading ...</div>} 
            <StyledList data={users} />
        </Layout>
    )
}

export default Admin