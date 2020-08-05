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

const StyledButton = styled.button`
    text-decoration: none;
    border: none;
    color: ${({ textColor }) => textColor ? textColor : "dodgerblue"};
    background-color: ${({ color }) => color ? color : "dodgerblue"};
    padding: 0.5rem 1rem;
    border-radius: 10px;
    margin: 1rem 0;
    margin-right: 1rem;
`

const StyledList = ({ data, buttons }) => (
    <StyledUl>
        { data &&
            data.map(item => (
                <StyledLi key={item.id}>
                    {Object.entries(item).map((itemData, index) => (
                        <StyledElement key={index}>
                            <StyledField>{itemData[0]}: </StyledField>{" " + itemData[1]}
                        </StyledElement>
                    ))}
                    {buttons 
                        && (
                            buttons.map((button, index) => (
                                <StyledButton key={index}
                                    color={button.color} 
                                    textColor={button.textColor} 
                                    onClick={button.onClick}
                                    data-id={item.id}
                                >
                                    {button.text}
                                </StyledButton>
                            ))
                        )}
                </StyledLi>
            ))}
    </StyledUl>
)

export default StyledList
export { StyledUl, StyledLi, StyledElement, StyledField, StyledButton }