import React from 'react'
 
import PasswordResetForm from '../pages/password_reset'
import PasswordChangeForm from '../pages/password_change'
 
const AccountPage = () => (
  <div>
    <h1>Account Page</h1>
    <PasswordResetForm />
    <PasswordChangeForm />
  </div>
);
 
export default AccountPage