import React, { useEffect, useState } from 'react'
import { useFirebase } from '../firebase'
import Layout from '../components/layout'

const Admin = () => {
    const firebase = useFirebase()

    const [ users, setUsers ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        firebase.users().on('value', snapshot => {
            setUsers(snapshot.val())
            setLoading(false)
        })
    }, [])

    return (
        <Layout>
            <h1>Admin</h1>
            
        </Layout>
    )
}

export default Admin