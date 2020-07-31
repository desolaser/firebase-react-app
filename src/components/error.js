import React from 'react'
import styled from 'styled-components'

const ErrorDiv = styled.div`
    background-color: tomato;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 1px 0 1px #eeeeee;
`

const Error = ({ message }) => {
    return (
        <ErrorDiv>{message}</ErrorDiv>
    )
}

export default Error