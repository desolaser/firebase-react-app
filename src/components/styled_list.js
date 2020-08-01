import React from 'react'
import styled from 'styled-components'

const StyledUl = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

const StyledLi = styled.ul`
    box-shadow: 0 2px 2px #aaaaaa;
    padding: 1rem;
    margin: 1rem 0;
`

const StyledField = styled.div`
    display: inline-block;
    font-weight: bold;
`

const StyledElement = styled.div`
    padding: 0.25rem 0;
`

const StyledList = ({ data }) => (
    <StyledUl>
        {data.map(item => (
            <StyledLi key={item.uid}>
                {Object.entries(item).map((itemData, index) => (
                    <StyledElement key={index}>
                        <StyledField>{itemData[0]}: </StyledField>{" " + itemData[1]}
                    </StyledElement>
                ))}
            </StyledLi>
        ))}
    </StyledUl>
)

export default StyledList