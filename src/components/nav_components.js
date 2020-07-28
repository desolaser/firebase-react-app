import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavTitle = styled.div`
    float: right;
    padding-right: 3rem;
    font-size: 1.8rem;
    color: ${props => props.color ? props.color : "black"};
`

const NavBar = styled.nav`
    padding: 1rem 0;
    background-color: dodgerblue;
`

const NavList = styled.ul`
    display: inline-block;
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding-left: 2rem;
`

const NavItem = styled.li`
    float: left;
    padding: .5rem 2rem;
`
  
const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 1.2rem;
    color: white;
`

export { NavBar, NavTitle, NavList, NavItem, NavLink }