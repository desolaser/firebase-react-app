import React from 'react'
import styled from 'styled-components'

const ErrorDiv = styled.div`
    background-color: tomato;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 2px 2px #aaaaaa;
    margin-top: 2rem;
    color: white;
`

const Error = ({ message }) => {
    return (
        <ErrorDiv>{message}</ErrorDiv>
    )
}

export default Error