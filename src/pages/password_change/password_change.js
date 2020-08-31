import React from 'react'
 
import Layout from 'components/layout'
import PasswordChangeForm from 'components/password_change_form'

const PasswordChange = props => {
    return (
        <Layout>
            <PasswordChangeForm {...props} />
        </Layout>
    )
}

export default PasswordChange
