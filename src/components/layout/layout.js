import React from 'react'
import styled from 'styled-components'

import Header from 'components/layout/header'
import Footer from 'components/layout/footer'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const Container = styled.div`
    flex-grow: 1;
`

const Content = styled.div`
    width: 75%;
    margin: auto;
    padding: 3rem;
`

const Layout = ({ children }) => {
    return (
        <Wrapper>
            <Container>
                <Header />
                <Content>
                    {children}
                </Content>
            </Container>
            <Footer>
                Page created by Felipe Olavarría, Copyright @ 2020
            </Footer>
        </Wrapper>
    )
}

export default Layout
