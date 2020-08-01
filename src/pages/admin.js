import React, { useEffect, useState } from 'react'
import { useFirebase } from '../firebase'
import Layout from '../components/layout'

const Admin = () => {
    const firebase = useFirebase()

    const [ users, setUsers ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();
            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));

            setUsers(usersList)
            setLoading(false)
        })

        return (
            firebase.users().off()
        )
    }, [])

    return (
        <Layout>
            <h1>Admin</h1>

        </Layout>
    )
}

export default Admin