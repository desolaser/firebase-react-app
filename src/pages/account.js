import React from 'react'
import { useAuth } from '../auth'

import Layout from '../components/layout'
import PasswordChangeForm from '../components/password_change_form'
 
const AccountPage = () => {
    const { user, setUser } = useAuth()

    return (
        <Layout>
            <PasswordChangeForm user={user} setUser={setUser} />
        </Layout>
    )
}
 
export default AccountPage