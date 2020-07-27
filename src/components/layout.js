import React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer>
                Page created by Felipe Olavarría, Copyright @ 2020
            </Footer>
        </div>
    )
}

export default Layout
