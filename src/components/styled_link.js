import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    background-color: dodgerblue;
    display: block;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 2px 2px #aaaaaa;
    margin-top: 2rem;
    color: white;    
    text-decoration: none;
`

export default StyledLink