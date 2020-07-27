import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    font-size: 2rem;
    color: ${props => props.color ? props.color : "black"};
`;

const BrandTitle = props => <Div {...props}>{props.children}</Div>
export default BrandTitle