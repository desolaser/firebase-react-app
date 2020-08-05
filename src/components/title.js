import React from 'react'
import styled from 'styled-components'

const TitleDiv = styled.div`
    padding: 2rem;
    margin: auto;
    text-align: center;
`

const TitleText = styled.div`
    font-size: 3rem;
`

const SubTitle = styled.div`
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: light;
`

const Title = ({ text, subtitle }) => (
    <TitleDiv>
        <TitleText class="display-4">{text}</TitleText>
        <SubTitle class="lead">{subtitle}</SubTitle>
    </TitleDiv>
)

export default Title